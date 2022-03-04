const { ethers } = require("hardhat");

async function main()
{
    const address = "0xbEc2901096e8a9016baE2562F5059ba646B98b90"
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const interface = await ethers.getContractFactory("GuessTheNumberChallenge");
    const contract = await interface.attach(address);
    // const tx = await contract.guess(42, {
    //     value: ethers.utils.parseEther(`1`),
    //     gasLimit: 1e5,
    //   });
    // console.log(tx);
    const res = await contract.isComplete();
    console.log(res);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });