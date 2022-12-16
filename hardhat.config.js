/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

/** const { API_URL, PRIVATE_KEY } = process.env; */

module.exports = {
  solidity: "0.8.17",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: "https://eth-goerli.g.alchemy.com/v2/w4JkSFNj2lXWlJNOebGLtdu0cpUES0s4",
         accounts: ['26abb9d23e0fb36661269329e3a475b26a938268bae529fc1f9b12951bfebb46']
      }
   },
};
