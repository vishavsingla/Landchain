require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/MXvSnC_DxLZPdMJ-J39F7B78lBAdxNg4",
      accounts: ["b7c9c339b65dcca2a05c9bc0a4b6943860f9f16a3a4ce6174ca29354bc84f186"],
    },
  },
};

