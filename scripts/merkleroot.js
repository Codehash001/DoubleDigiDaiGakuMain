const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const _initBaseURI='ipfs://Qmf9nAJRfRMJjd4eWkAxWNavgsZUAs5m1kdNftw15NEGFc/'


async function main() {
  const nftFactory = await hre.ethers.getContractFactory('DoubleDigiDaigaku')
  const nftContract = await nftFactory.attach(
    '0xAE0b454e9a3CB062A83C81957A410B0256891E53'
  )

    // Calculate merkle root from the whitelist array
    const leafNodes = whitelist.map((addr) => keccak256(addr))
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
    const root = merkleTree.getRoot().toString('hex')
  
  
  
    console.log('Whitelist root set to:', root)
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
