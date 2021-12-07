import { ethers } from "hardhat"
import { expect } from "chai"

describe("RawToken", () => {
    let owner
    let addr1: any
    let addresses
    let RawToken
    let rawToken: any

    beforeEach(async () => {
        [owner, addr1, ...addresses] = await ethers.getSigners()

        RawToken = await ethers.getContractFactory("RawToken")
        rawToken = await RawToken.deploy()
    })

    describe("faucet()", () => {
        it("should deposit 100 tokens to the recipient account", async () => {
            const amount = ethers.utils.parseEther("100")
            await rawToken.connect(addr1).faucet(addr1.address, amount)

            const balance = await rawToken.balanceOf(addr1.address)
            expect(balance).to.equal(amount)
        })
    })
})