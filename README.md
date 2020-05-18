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
Please follow steps in order. I am using Windows PC, installation and configuration might be different on Mac.
<ol>
<li>Download Node.js and npm from [link] (https://nodejs.org/en/)
<li>Create and Run React project in Command Line 
 ![GitHub Logo](/images/logo.png)
<li>Use remix to check smart contract solidity code (http://remix.ethereum.org)
<li>Install Ganache to run a local development blockchain that can be used to mimic the behavior of a public blockchain. (https://www.trufflesuite.com/ganache)
<li>Use Metamask to create Ganache accounts to test the contract.
<li>Compile and deploy “crowdfunding_payable.sol” in Remix under Ganache account.
<li>Configure your environment for developing smart contracts. Node Package Manager, or NPM should be installed. (https://nodejs.org/en/)
<li>Create new React project using Command line
<li>Add web3.js, crowdfunding.js into the src file and replace the original app.js by file provided in this repository
<li>On command line, get into “src” folder and run: “npm start”
<li>Copy and paste deployed contract address in crowdfunding.js
<li>Open local host to test the platform (http://localhost:3000)
<li>Solidity code can be modified in Remix platform.
<li>Configuration of the frontend UI can be made by modifying “App.js” in the “src” folder
<ol>
