const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`);

const account1 = ""; // sender
const account2 = ""; // receiver

const privateKey = ""; //sender wallet private key

const wallet = new ethers.Wallet(privateKey, provider); //creating a instance of a wallet so we can sign the transactions

const main = async () => {
  const senderBalanceBefore = await provider.getBalance(account1);
  const recieverBalanceBefore = await provider.getBalance(account2);

  console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`);
  console.log(`Receiver balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`);

  const tx = await wallet.sendTransaction({ to: account2, value: ethers.utils.parseEther("0.025") }); //making a transaction

  //wait for transaction to be mined
  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(account1);
  const recieverBalanceAfter = await provider.getBalance(account2);

  console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`);
  console.log(`Receiver balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`);
};

main();
