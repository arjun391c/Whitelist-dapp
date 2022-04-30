const { ethers } = require('hardhat')

async function main() {
    /*
        A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
        so whitelistContract here is a factory for instances of our Whitelist contract.
    */
    const whitelistContract = await ethers.getContractFactory("Whitelist");

    /* 10 - max count */
    const deployedWhitelistContract = await whitelistContract.deploy(10);

    //wait to finish deploying
    await deployedWhitelistContract.deployed()

    //address of contract
    console.log(
        "Contract Adress",
        deployedWhitelistContract.address 
    )
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })


    /* 
    0x85c5D096df9b1626FF70f87F51A961156760530D
    */