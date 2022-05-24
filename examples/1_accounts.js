const { ethers } = require("ethers"); //How to import ethers into your project.

const INFURA_ID = "";
const ADDRESS = "";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`); //Establish connection with json rcp to be able to communicate with the blockchain

const main = async () => {
  const balance = await provider.getBalance(`${ADDRESS}`); //Fetch balance from an address
  console.log(`\nETH Balance of ${ADDRESS} --> ${ethers.utils.formatEther(balance)} ETH\n`); //Giving format to the output
};

main();
