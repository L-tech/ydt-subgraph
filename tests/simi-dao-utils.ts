import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CancelProposal,
  Deposit,
  DonationApproved,
  DonationReceived,
  SubmitDonationProposal,
  SubmitMemberProposal,
  SubmitVote
} from "../generated/SimiDAO/SimiDAO"

export function createCancelProposalEvent(
  proposalId: BigInt,
  applicantAddress: Address
): CancelProposal {
  let cancelProposalEvent = changetype<CancelProposal>(newMockEvent())

  cancelProposalEvent.parameters = new Array()

  cancelProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  cancelProposalEvent.parameters.push(
    new ethereum.EventParam(
      "applicantAddress",
      ethereum.Value.fromAddress(applicantAddress)
    )
  )

  return cancelProposalEvent
}

export function createDepositEvent(amount: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createDonationApprovedEvent(
  paymentRequested: BigInt,
  category: string,
  flags: Array<boolean>,
  proposalId: BigInt,
  senderAddress: Address,
  beneficiary: Address,
  beneficiaryName: string,
  beneficiarySocial: string
): DonationApproved {
  let donationApprovedEvent = changetype<DonationApproved>(newMockEvent())

  donationApprovedEvent.parameters = new Array()

  donationApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentRequested",
      ethereum.Value.fromUnsignedBigInt(paymentRequested)
    )
  )
  donationApprovedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  donationApprovedEvent.parameters.push(
    new ethereum.EventParam("flags", ethereum.Value.fromBooleanArray(flags))
  )
  donationApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  donationApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "senderAddress",
      ethereum.Value.fromAddress(senderAddress)
    )
  )
  donationApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  donationApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiaryName",
      ethereum.Value.fromString(beneficiaryName)
    )
  )
  donationApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiarySocial",
      ethereum.Value.fromString(beneficiarySocial)
    )
  )

  return donationApprovedEvent
}

export function createDonationReceivedEvent(
  proposalId: BigInt,
  amount: BigInt
): DonationReceived {
  let donationReceivedEvent = changetype<DonationReceived>(newMockEvent())

  donationReceivedEvent.parameters = new Array()

  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationReceivedEvent
}

export function createSubmitDonationProposalEvent(
  propsalId: BigInt,
  name: string,
  media: string,
  duration: BigInt,
  goal: BigInt
): SubmitDonationProposal {
  let submitDonationProposalEvent = changetype<SubmitDonationProposal>(
    newMockEvent()
  )

  submitDonationProposalEvent.parameters = new Array()

  submitDonationProposalEvent.parameters.push(
    new ethereum.EventParam(
      "propsalId",
      ethereum.Value.fromUnsignedBigInt(propsalId)
    )
  )
  submitDonationProposalEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  submitDonationProposalEvent.parameters.push(
    new ethereum.EventParam("media", ethereum.Value.fromString(media))
  )
  submitDonationProposalEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  submitDonationProposalEvent.parameters.push(
    new ethereum.EventParam("goal", ethereum.Value.fromUnsignedBigInt(goal))
  )

  return submitDonationProposalEvent
}

export function createSubmitMemberProposalEvent(
  proposer: Address,
  paymentRequested: BigInt,
  category: string,
  flags: Array<boolean>,
  proposalId: BigInt,
  senderAddress: Address
): SubmitMemberProposal {
  let submitMemberProposalEvent = changetype<SubmitMemberProposal>(
    newMockEvent()
  )

  submitMemberProposalEvent.parameters = new Array()

  submitMemberProposalEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  submitMemberProposalEvent.parameters.push(
    new ethereum.EventParam(
      "paymentRequested",
      ethereum.Value.fromUnsignedBigInt(paymentRequested)
    )
  )
  submitMemberProposalEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  submitMemberProposalEvent.parameters.push(
    new ethereum.EventParam("flags", ethereum.Value.fromBooleanArray(flags))
  )
  submitMemberProposalEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  submitMemberProposalEvent.parameters.push(
    new ethereum.EventParam(
      "senderAddress",
      ethereum.Value.fromAddress(senderAddress)
    )
  )

  return submitMemberProposalEvent
}

export function createSubmitVoteEvent(
  proposalIndex: BigInt,
  memberAddress: Address,
  uintVote: i32
): SubmitVote {
  let submitVoteEvent = changetype<SubmitVote>(newMockEvent())

  submitVoteEvent.parameters = new Array()

  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "proposalIndex",
      ethereum.Value.fromUnsignedBigInt(proposalIndex)
    )
  )
  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )
  submitVoteEvent.parameters.push(
    new ethereum.EventParam(
      "uintVote",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(uintVote))
    )
  )

  return submitVoteEvent
}
