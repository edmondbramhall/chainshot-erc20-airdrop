async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  const Token = await ethers.getContractFactory("EdCoin");
  const token = await Token.deploy();

  console.log("Token address:", token.address);

  // Deploying contracts with the account: 0xC67d9Df0eD8B7DA40D50cd75A9586a7e60d82260
  // Account balance: 0.034954049997333
  // Token address: 0xA6319222194dE93ee6DEFF93dafA1692ef1391E2
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});