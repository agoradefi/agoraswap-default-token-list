const { version } = require("../package.json");
/*const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");*/
// const bscMainnet = require("./tokens/bsc-mainnet.json");
// const bscTestnet = require("./tokens/bsc-testnet.json");
// const harmonyMainnet = require("./tokens/harmony-mainnet.json");
// const harmonyTestnet = require("./tokens/harmony-testnet.json");
const metisMainnet = require("./tokens/metis-mainnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Agoraswap Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://legacy.agoradefi.io/assets/img/AGORA_logo.png",
    keywords: ["agoraswap", "default"],
    tokens: [...metisMainnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};