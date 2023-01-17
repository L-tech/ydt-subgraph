import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ChangeTrustedForwarder,
  ClaimedPrize,
  DepositToken,
  DonationMade,
  InjectedFunds,
  LotteryUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetTeamAddress,
  SimiDAOUpdated,
  Transfer
} from "../generated/YDT/YDT"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createChangeTrustedForwarderEvent(
  trustedForwarder: Address
): ChangeTrustedForwarder {
  let changeTrustedForwarderEvent = changetype<ChangeTrustedForwarder>(
    newMockEvent()
  )

  changeTrustedForwarderEvent.parameters = new Array()

  changeTrustedForwarderEvent.parameters.push(
    new ethereum.EventParam(
      "trustedForwarder",
      ethereum.Value.fromAddress(trustedForwarder)
    )
  )

  return changeTrustedForwarderEvent
}

export function createClaimedPrizeEvent(
  _user: Address,
  _token: Address,
  _amount: BigInt
): ClaimedPrize {
  let claimedPrizeEvent = changetype<ClaimedPrize>(newMockEvent())

  claimedPrizeEvent.parameters = new Array()

  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return claimedPrizeEvent
}

export function createDepositTokenEvent(
  depositor: Address,
  token: Address,
  amount: BigInt,
  fund: BigInt
): DepositToken {
  let depositTokenEvent = changetype<DepositToken>(newMockEvent())

  depositTokenEvent.parameters = new Array()

  depositTokenEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("fund", ethereum.Value.fromUnsignedBigInt(fund))
  )

  return depositTokenEvent
}

export function createDonationMadeEvent(
  donor: Address,
  donationId: BigInt,
  amount: BigInt
): DonationMade {
  let donationMadeEvent = changetype<DonationMade>(newMockEvent())

  donationMadeEvent.parameters = new Array()

  donationMadeEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  donationMadeEvent.parameters.push(
    new ethereum.EventParam(
      "donationId",
      ethereum.Value.fromUnsignedBigInt(donationId)
    )
  )
  donationMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationMadeEvent
}

export function createInjectedFundsEvent(
  _lotteryId: BigInt,
  _amount: BigInt
): InjectedFunds {
  let injectedFundsEvent = changetype<InjectedFunds>(newMockEvent())

  injectedFundsEvent.parameters = new Array()

  injectedFundsEvent.parameters.push(
    new ethereum.EventParam(
      "_lotteryId",
      ethereum.Value.fromUnsignedBigInt(_lotteryId)
    )
  )
  injectedFundsEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return injectedFundsEvent
}

export function createLotteryUpdatedEvent(_lottery: Address): LotteryUpdated {
  let lotteryUpdatedEvent = changetype<LotteryUpdated>(newMockEvent())

  lotteryUpdatedEvent.parameters = new Array()

  lotteryUpdatedEvent.parameters.push(
    new ethereum.EventParam("_lottery", ethereum.Value.fromAddress(_lottery))
  )

  return lotteryUpdatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSetTeamAddressEvent(_team: Address): SetTeamAddress {
  let setTeamAddressEvent = changetype<SetTeamAddress>(newMockEvent())

  setTeamAddressEvent.parameters = new Array()

  setTeamAddressEvent.parameters.push(
    new ethereum.EventParam("_team", ethereum.Value.fromAddress(_team))
  )

  return setTeamAddressEvent
}

export function createSimiDAOUpdatedEvent(_simiDAO: Address): SimiDAOUpdated {
  let simiDaoUpdatedEvent = changetype<SimiDAOUpdated>(newMockEvent())

  simiDaoUpdatedEvent.parameters = new Array()

  simiDaoUpdatedEvent.parameters.push(
    new ethereum.EventParam("_simiDAO", ethereum.Value.fromAddress(_simiDAO))
  )

  return simiDaoUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
