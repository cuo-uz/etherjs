const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const main = async () => {
  const block = await provider.getBlockNumber(); //Obtaining the latest block

  console.log(`\nBlock number: ${block}`);

  const blockInfo = await provider.getBlock(block); //obtaining the info of that block

  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);
  console.log(`\nLogging first transaction in block:\n`);
  console.log(transactions[0]);
};

main();
