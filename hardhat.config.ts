import "@nomiclabs/hardhat-waffle"


module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://speedy-nodes-nyc.moralis.io/f801138353f4738e5e87afed/eth/rinkeby",
      accounts: ["7a8808e120a6690c1fd617b9a535d4c51b98b2afd762f42146185d8d21d0cf30"]
    }
  },
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
