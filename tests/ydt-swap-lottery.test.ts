import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { LotteryClose } from "../generated/schema"
import { LotteryClose as LotteryCloseEvent } from "../generated/YDTSwapLottery/YDTSwapLottery"
import { handleLotteryClose } from "../src/ydt-swap-lottery"
import { createLotteryCloseEvent } from "./ydt-swap-lottery-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let lotteryId = BigInt.fromI32(234)
    let firstTicketIdNextLottery = BigInt.fromI32(234)
    let newLotteryCloseEvent = createLotteryCloseEvent(
      lotteryId,
      firstTicketIdNextLottery
    )
    handleLotteryClose(newLotteryCloseEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LotteryClose created and stored", () => {
    assert.entityCount("LotteryClose", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LotteryClose",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lotteryId",
      "234"
    )
    assert.fieldEquals(
      "LotteryClose",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "firstTicketIdNextLottery",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
