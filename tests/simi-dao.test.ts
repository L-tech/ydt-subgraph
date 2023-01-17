import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CancelProposal } from "../generated/schema"
import { CancelProposal as CancelProposalEvent } from "../generated/SimiDAO/SimiDAO"
import { handleCancelProposal } from "../src/simi-dao"
import { createCancelProposalEvent } from "./simi-dao-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let proposalId = BigInt.fromI32(234)
    let applicantAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCancelProposalEvent = createCancelProposalEvent(
      proposalId,
      applicantAddress
    )
    handleCancelProposal(newCancelProposalEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CancelProposal created and stored", () => {
    assert.entityCount("CancelProposal", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CancelProposal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalId",
      "234"
    )
    assert.fieldEquals(
      "CancelProposal",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "applicantAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
