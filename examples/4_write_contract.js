const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`);

const account1 = ""; // sender
const account2 = ""; // receiver

const privateKey = ""; //sender wallet private key
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = "0xa36085F69e2889c224210F603D836748e7dC0088"; //token link address
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\nReading from ${address}\n`);
  console.log(`Balance of sender: ${balance}\n`);

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait();

  const balanceOfSender = await contract.balanceOf(account1);
  const balanceOfReciever = await contract.balanceOf(account2);

  console.log(`\nBalance of sender: ${balanceOfSender}`);
  console.log(`Balance of reciever: ${balanceOfReciever}\n`);
};

main();
