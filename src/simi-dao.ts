import {
  CancelProposal as CancelProposalEvent,
  DonationApproved as DonationApprovedEvent,
  DonationReceived as DonationReceivedEvent,
  SubmitDonationProposal as SubmitDonationProposalEvent,
  SubmitMemberProposal as SubmitMemberProposalEvent,
  SubmitVote as SubmitVoteEvent
} from "../generated/SimiDAO/SimiDAO"
import {
  CancelProposal,
  ApprovedDonation,
  Donation,
  DonationReceived,
  SubmitDonationProposal,
  SubmitMemberProposal,
  SubmitVote
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleCancelProposal(event: CancelProposalEvent): void {
  let entity = new CancelProposal(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.proposalId = event.params.proposalId
  entity.applicantAddress = event.params.applicantAddress
  entity.save()
}


export function handleDonationApproved(event: DonationApprovedEvent): void {
  let entity = new ApprovedDonation(
    event.params.proposalId.toString()
  )
  entity.paymentRequested = event.params.paymentRequested
  entity.amountRaised = BigInt.fromI32(0)
  entity.yesVotes = BigInt.fromI32(0)
  entity.noVotes = BigInt.fromI32(0)
  entity.donors = BigInt.fromI32(0)
  entity.category = event.params.category
  entity.flags = event.params.flags
  entity.proposalId = event.params.proposalId
  entity.senderAddress = event.params.senderAddress
  entity.beneficiary = event.params.beneficiary
  entity.beneficiaryName = event.params.beneficiaryName
  entity.beneficiarySocial = event.params.beneficiarySocial
  entity.save()
}

export function handleDonationReceived(event: DonationReceivedEvent): void {
  let entity = new DonationReceived(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  let entityDon = new Donation(
    event.block.timestamp.toString()
  )
  entityDon.amount = ((event.params.amount).times(BigInt.fromI32(100))).div(BigInt.fromI32(95))
  entityDon.proposaId = event.params.proposalId
  entityDon.createdAt = event.block.timestamp
  entityDon.save()

  let apop = ApprovedDonation.load(event.params.proposalId.toString())
  if(apop) {
    apop.amountRaised = apop.amountRaised.plus(entityDon.amount)
    apop.donors = apop.donors.plus(BigInt.fromI32(1))
    apop.save()
  }
  entity.proposalId = event.params.proposalId
  entity.amount = event.params.amount
  entity.createdAt = event.block.timestamp
  entity.save()
}

export function handleSubmitDonationProposal(
  event: SubmitDonationProposalEvent
): void {
  let entity = new SubmitDonationProposal(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.propsalId = event.params.propsalId
  entity.name = event.params.name
  entity.media = event.params.media
  entity.duration = event.params.duration
  entity.goal = event.params.goal
  entity.save()
}

export function handleSubmitMemberProposal(
  event: SubmitMemberProposalEvent
): void {
  let entity = new SubmitMemberProposal(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.proposer = event.params.proposer
  entity.paymentRequested = event.params.paymentRequested
  entity.category = event.params.category
  entity.flags = event.params.flags
  entity.proposalId = event.params.proposalId
  entity.senderAddress = event.params.senderAddress
  entity.save()
}

export function handleSubmitVote(event: SubmitVoteEvent): void {
  let entity = new SubmitVote(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  let apop = ApprovedDonation.load(
    event.params.proposalIndex.toString()
  )
  if(apop && event.params.uintVote == 1) {
    apop.yesVotes = apop.yesVotes.plus(BigInt.fromI32(event.params.uintVote))
    apop.save()
  }
  if(apop && event.params.uintVote == 2) {
    apop.noVotes = apop.noVotes.plus(BigInt.fromI32(event.params.uintVote))
    apop.save()
  }
  entity.proposalIndex = event.params.proposalIndex
  entity.memberAddress = event.params.memberAddress
  entity.uintVote = event.params.uintVote
  entity.save()
}
