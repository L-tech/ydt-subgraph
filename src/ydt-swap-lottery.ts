import {
  LotteryClose as LotteryCloseEvent,
  LotteryInjection as LotteryInjectionEvent,
  LotteryNumberDrawn as LotteryNumberDrawnEvent,
  LotteryOpen as LotteryOpenEvent,
  NewOperatorAndTreasuryAndInjectorAddresses as NewOperatorAndTreasuryAndInjectorAddressesEvent,
  NewRandomGenerator as NewRandomGeneratorEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TicketsClaim as TicketsClaimEvent,
  TicketsPurchase as TicketsPurchaseEvent
} from "../generated/YDTSwapLottery/YDTSwapLottery"
import {
  LotteryClose,
  LotteryInjection,
  LotteryNumberDrawn,
  LotteryOpen,
  NewOperatorAndTreasuryAndInjectorAddresses,
  NewRandomGenerator,
  TicketsClaim,
  TicketsPurchase
} from "../generated/schema"

export function handleLotteryClose(event: LotteryCloseEvent): void {
  let entity = new LotteryClose(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.lotteryId = event.params.lotteryId
  entity.firstTicketIdNextLottery = event.params.firstTicketIdNextLottery
  entity.save()
}

export function handleLotteryInjection(event: LotteryInjectionEvent): void {
  let entity = new LotteryInjection(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.lotteryId = event.params.lotteryId
  entity.injectedAmount = event.params.injectedAmount
  entity.save()
}

export function handleLotteryNumberDrawn(event: LotteryNumberDrawnEvent): void {
  let entity = new LotteryNumberDrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.lotteryId = event.params.lotteryId
  entity.finalNumber = event.params.finalNumber
  entity.countWinningTickets = event.params.countWinningTickets
  entity.save()
}

export function handleLotteryOpen(event: LotteryOpenEvent): void {
  let entity = new LotteryOpen(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.lotteryId = event.params.lotteryId
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.priceTicketInYDT = event.params.priceTicketInYDT
  entity.firstTicketId = event.params.firstTicketId
  entity.injectedAmount = event.params.injectedAmount
  entity.save()
}

export function handleNewOperatorAndTreasuryAndInjectorAddresses(
  event: NewOperatorAndTreasuryAndInjectorAddressesEvent
): void {
  let entity = new NewOperatorAndTreasuryAndInjectorAddresses(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.treasury = event.params.treasury
  entity.injector = event.params.injector
  entity.save()
}

export function handleNewRandomGenerator(event: NewRandomGeneratorEvent): void {
  let entity = new NewRandomGenerator(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.randomGenerator = event.params.randomGenerator
  entity.save()
}

export function handleTicketsClaim(event: TicketsClaimEvent): void {
  let entity = new TicketsClaim(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimer = event.params.claimer
  entity.amount = event.params.amount
  entity.lotteryId = event.params.lotteryId
  entity.numberTickets = event.params.numberTickets
  entity.save()
}

export function handleTicketsPurchase(event: TicketsPurchaseEvent): void {
  let entity = new TicketsPurchase(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.buyer = event.params.buyer
  entity.lotteryId = event.params.lotteryId
  entity.numberTickets = event.params.numberTickets
  entity.save()
}
