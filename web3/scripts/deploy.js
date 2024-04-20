const main = async () => {
  const landFactory = await hre.ethers.getContractFactory(
    "LandRegistery"
  );
  const landContract = await landFactory.deploy();

  await landContract.waitForDeployment();
    const myAddress = await landContract.getAddress();
  console.log("Transactions address: ",myAddress);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();