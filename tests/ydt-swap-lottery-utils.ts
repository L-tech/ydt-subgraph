import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  LotteryClose,
  LotteryInjection,
  LotteryNumberDrawn,
  LotteryOpen,
  NewOperatorAndTreasuryAndInjectorAddresses,
  NewRandomGenerator,
  OwnershipTransferred,
  TicketsClaim,
  TicketsPurchase
} from "../generated/YDTSwapLottery/YDTSwapLottery"

export function createLotteryCloseEvent(
  lotteryId: BigInt,
  firstTicketIdNextLottery: BigInt
): LotteryClose {
  let lotteryCloseEvent = changetype<LotteryClose>(newMockEvent())

  lotteryCloseEvent.parameters = new Array()

  lotteryCloseEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryId",
      ethereum.Value.fromUnsignedBigInt(lotteryId)
    )
  )
  lotteryCloseEvent.parameters.push(
    new ethereum.EventParam(
      "firstTicketIdNextLottery",
      ethereum.Value.fromUnsignedBigInt(firstTicketIdNextLottery)
    )
  )

  return lotteryCloseEvent
}

export function createLotteryInjectionEvent(
  lotteryId: BigInt,
  injectedAmount: BigInt
): LotteryInjection {
  let lotteryInjectionEvent = changetype<LotteryInjection>(newMockEvent())

  lotteryInjectionEvent.parameters = new Array()

  lotteryInjectionEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryId",
      ethereum.Value.fromUnsignedBigInt(lotteryId)
    )
  )
  lotteryInjectionEvent.parameters.push(
    new ethereum.EventParam(
      "injectedAmount",
      ethereum.Value.fromUnsignedBigInt(injectedAmount)
    )
  )

  return lotteryInjectionEvent
}

export function createLotteryNumberDrawnEvent(
  lotteryId: BigInt,
  finalNumber: BigInt,
  countWinningTickets: BigInt
): LotteryNumberDrawn {
  let lotteryNumberDrawnEvent = changetype<LotteryNumberDrawn>(newMockEvent())

  lotteryNumberDrawnEvent.parameters = new Array()

  lotteryNumberDrawnEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryId",
      ethereum.Value.fromUnsignedBigInt(lotteryId)
    )
  )
  lotteryNumberDrawnEvent.parameters.push(
    new ethereum.EventParam(
      "finalNumber",
      ethereum.Value.fromUnsignedBigInt(finalNumber)
    )
  )
  lotteryNumberDrawnEvent.parameters.push(
    new ethereum.EventParam(
      "countWinningTickets",
      ethereum.Value.fromUnsignedBigInt(countWinningTickets)
    )
  )

  return lotteryNumberDrawnEvent
}

export function createLotteryOpenEvent(
  lotteryId: BigInt,
  startTime: BigInt,
  endTime: BigInt,
  priceTicketInYDT: BigInt,
  firstTicketId: BigInt,
  injectedAmount: BigInt
): LotteryOpen {
  let lotteryOpenEvent = changetype<LotteryOpen>(newMockEvent())

  lotteryOpenEvent.parameters = new Array()

  lotteryOpenEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryId",
      ethereum.Value.fromUnsignedBigInt(lotteryId)
    )
  )
  lotteryOpenEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  lotteryOpenEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  lotteryOpenEvent.parameters.push(
    new ethereum.EventParam(
      "priceTicketInYDT",
      ethereum.Value.fromUnsignedBigInt(priceTicketInYDT)
    )
  )
  lotteryOpenEvent.parameters.push(
    new ethereum.EventParam(
      "firstTicketId",
      ethereum.Value.fromUnsignedBigInt(firstTicketId)
    )
  )
  lotteryOpenEvent.parameters.push(
    new ethereum.EventParam(
      "injectedAmount",
      ethereum.Value.fromUnsignedBigInt(injectedAmount)
    )
  )

  return lotteryOpenEvent
}

export function createNewOperatorAndTreasuryAndInjectorAddressesEvent(
  operator: Address,
  treasury: Address,
  injector: Address
): NewOperatorAndTreasuryAndInjectorAddresses {
  let newOperatorAndTreasuryAndInjectorAddressesEvent = changetype<
    NewOperatorAndTreasuryAndInjectorAddresses
  >(newMockEvent())

  newOperatorAndTreasuryAndInjectorAddressesEvent.parameters = new Array()

  newOperatorAndTreasuryAndInjectorAddressesEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  newOperatorAndTreasuryAndInjectorAddressesEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )
  newOperatorAndTreasuryAndInjectorAddressesEvent.parameters.push(
    new ethereum.EventParam("injector", ethereum.Value.fromAddress(injector))
  )

  return newOperatorAndTreasuryAndInjectorAddressesEvent
}

export function createNewRandomGeneratorEvent(
  randomGenerator: Address
): NewRandomGenerator {
  let newRandomGeneratorEvent = changetype<NewRandomGenerator>(newMockEvent())

  newRandomGeneratorEvent.parameters = new Array()

  newRandomGeneratorEvent.parameters.push(
    new ethereum.EventParam(
      "randomGenerator",
      ethereum.Value.fromAddress(randomGenerator)
    )
  )

  return newRandomGeneratorEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTicketsClaimEvent(
  claimer: Address,
  amount: BigInt,
  lotteryId: BigInt,
  numberTickets: BigInt
): TicketsClaim {
  let ticketsClaimEvent = changetype<TicketsClaim>(newMockEvent())

  ticketsClaimEvent.parameters = new Array()

  ticketsClaimEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  ticketsClaimEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  ticketsClaimEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryId",
      ethereum.Value.fromUnsignedBigInt(lotteryId)
    )
  )
  ticketsClaimEvent.parameters.push(
    new ethereum.EventParam(
      "numberTickets",
      ethereum.Value.fromUnsignedBigInt(numberTickets)
    )
  )

  return ticketsClaimEvent
}

export function createTicketsPurchaseEvent(
  buyer: Address,
  lotteryId: BigInt,
  numberTickets: BigInt
): TicketsPurchase {
  let ticketsPurchaseEvent = changetype<TicketsPurchase>(newMockEvent())

  ticketsPurchaseEvent.parameters = new Array()

  ticketsPurchaseEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  ticketsPurchaseEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryId",
      ethereum.Value.fromUnsignedBigInt(lotteryId)
    )
  )
  ticketsPurchaseEvent.parameters.push(
    new ethereum.EventParam(
      "numberTickets",
      ethereum.Value.fromUnsignedBigInt(numberTickets)
    )
  )

  return ticketsPurchaseEvent
}
