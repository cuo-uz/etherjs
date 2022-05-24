const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider); //Create a instance of contract to interact with him, requires three parameters

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();
  const balanceOf = await contract.balanceOf("");
  console.log(`\n Reading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${ethers.utils.formatEther(totalSupply)}\n`);
  console.log(`My balance: ${ethers.utils.formatEther(balanceOf)} DAI`);
};

main();
