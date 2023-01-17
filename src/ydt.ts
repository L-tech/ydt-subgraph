import {
  Approval as ApprovalEvent,
  ChangeTrustedForwarder as ChangeTrustedForwarderEvent,
  ClaimedPrize as ClaimedPrizeEvent,
  DonationMade as DonationMadeEvent,
  InjectedFunds as InjectedFundsEvent,
  LotteryUpdated as LotteryUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SetTeamAddress as SetTeamAddressEvent,
  SimiDAOUpdated as SimiDAOUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/YDT/YDT"
import {
  User,
  ClaimedPrize,
  Donation,
  InjectedFunds,
  LotteryUpdated,
  SetTeamAddress,
  SimiDAOUpdated,
  Transfer
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"


export function handleClaimedPrize(event: ClaimedPrizeEvent): void {
  let entity = new ClaimedPrize(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._user = event.params._user
  entity._token = event.params._token
  entity._amount = event.params._amount
  entity.save()
}


export function handleDonationMade(event: DonationMadeEvent): void {
  let donation = Donation.load(event.block.timestamp.toString())
  if(donation) {
    donation.user = event.params.donor.toHexString()
    donation.save()
  }
  let user = User.load(event.params.donor.toHex())
  if (!user) {
    user = new User(event.params.donor.toHex())
    user.id = event.params.donor.toHex()
    user.save()
  }
  
}

export function handleInjectedFunds(event: InjectedFundsEvent): void {
  let entity = new InjectedFunds(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._lotteryId = event.params._lotteryId
  entity._amount = event.params._amount
  entity.save()
}

export function handleLotteryUpdated(event: LotteryUpdatedEvent): void {
  let entity = new LotteryUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._lottery = event.params._lottery
  entity.save()
}


export function handleSetTeamAddress(event: SetTeamAddressEvent): void {
  let entity = new SetTeamAddress(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._team = event.params._team
  entity.save()
}

export function handleSimiDAOUpdated(event: SimiDAOUpdatedEvent): void {
  let entity = new SimiDAOUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._simiDAO = event.params._simiDAO
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
