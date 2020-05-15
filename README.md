# blockchain-app-dev
Develop a crowdfunding platform with blockchain tech, a UI to interacte with the smart contract with React
## What's here
<ol>
<li> <b> Crowdfunding_Payable.sol:</b> contains the whole smart contract solidity code. Can be read and written with Remix
IDE.;
<li> <b> Web3.js:</b> new file need to be added under React-project-Src file; 
<li> <b> crowdfunding.js:</b> new file need to be added under React-project-Src file;
<li> <b> app.js:</b> contains functions and UI design;
</ol>

## How to use 
<ol>
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
