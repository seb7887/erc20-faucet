import { ethers } from "hardhat"

async function main() {
    const RawToken = await ethers.getContractFactory("RawToken")
    const rawToken = await RawToken.deploy()

    await rawToken.deployed()

    console.log("RawToken deployed to:", rawToken.address)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err)
        process.exit(1)
    })