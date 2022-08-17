import { ethers } from "hardhat";

const main = async () => {
  const SwapFactory = await ethers.getContractFactory("Staking");
  const swap = await SwapFactory.deploy();

  await swap.deployed();

  console.log("Swaping Contract deployed to:", swap.address);

  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
