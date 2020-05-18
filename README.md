# blockchain-app-dev
Design and develop a crowdfunding platform with blockchain tech, implement and test locally via Ganache, interact with the smart contract via a simple UI developped by React
## What's here
<ol> 
<li> <b> Crowdfunding with Blockchain.pdf</b> Plactform introduction and high level workflow;
<li> <b> Crowdfunding_Payable.sol</b> smart contract solidity code. Can be read and written on Remix;
<li> <b> Web3.js:</b> React-project-Src file; 
<li> <b> crowdfunding.js:</b> React-project-Src file, contains smart contract ABI and address;
<li> <b> app.js:</b>  React-project-Src file, contains functions and UI design;
</ol>

## How to use 
Please follow steps in order. I am using Windows PC, installation and configuration might be different on Mac.<br><br>
<b>Local Blockchain Setup</b> [Check this for detailed instruction](https://medium.com/@kacharlabhargav21/using-ganache-with-remix-and-metamask-446fe5748ccf)
<ol>
<li>Setup Metamask at https://metamask.io
<li>Download Ganache https://www.trufflesuite.com/ganache it will run a local development blockchain that can be used to mimic the behavior of a public blockchain
<li>Open Ganache with quickstart. You can see HTTP URL under RPC server (copy it).
<li>Open Metamask, Click on network and select custom RPC, use the copied server number to create private Ganache RPC on Metamask,
<li> Import account to Metamask by copy and paste private key of accounts created in Ganache.
</ol>
<b> Smart Contract</b>
<ol>
<li> Download Crowdfunding_Payable.sol from this repository, open it on Remix (http://remix.ethereum.org)
<li> On the remix homepage, select Solidity and go to solidity compiler to compile Crowdfunding_Payable.sol; Copy ABI and save it on notebook
<li> On the Deploy&run transactions page, select Web3 provider as environment, make sure the pop up window has the right RPC address
<li>Deploy the contract; Copy contract address and save it on notebook
</ol>
<b>React Interface</b>
<ol>
<li>Download Node.js and npm from https://nodejs.org/en/
<li>Create and Run React project in Command Line <br>
 <ul>
  <li>$ node-v (check current version of node)</li>
  <li>$ npm-v (make sure npm installed is successful)</li>
  <li>$ npm install -g create-react-app </li>
  <li>$ create-react-app crowdfunding-react</li>
  <li>$ cd crowdfunding-react</li>
  <li>$ npm run start</li> (if a windows pops up with URL -> localhost:300 shows react logo, you are all set with React)
 </ul>
 <li> download "web3.js" and "crowdfunding.js" from this repository and add these into the "src" folder (under "crowdfunding-react" folder you just created)
 <li> download "App.js" and replace it with the one in src
 <li> Refresh the -> localhost:300 page, a crowdfunding interface should appear, then you are all set with UI
 <li> Use code editor to open "src" folder under "crowdfunding-react" (I am using Visual Studio Code)
 <li> Open crowdfunding.js, paste and replace the ABI and the deployed contract address
 <li> Refresh the local host page, you can interact with the contract with different Metamask accounts
 <li>Configuration of the frontend UI can be made by modifying “App.js” file
</ol>
