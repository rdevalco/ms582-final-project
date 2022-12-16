async function main() {
   const multiSigVault = await ethers.getContractFactory("MultiSigVault");

   // Start deployment, returning a promise that resolves to a contract object
   const multi_SigVault = await multiSigVault.deploy("deployWallet");
   console.log("Contract deployed to address:", multi_SigVault.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });