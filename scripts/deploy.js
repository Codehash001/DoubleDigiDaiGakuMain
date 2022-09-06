const hre = require('hardhat')

const _initBaseURI='ipfs://Qmf9nAJRfRMJjd4eWkAxWNavgsZUAs5m1kdNftw15NEGFc/'
//const proxyRegistryAddressRinkeby = '0xf57b2c51ded3a29e6891aba85459d600256cf317'
//const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1'

async function main() {

  // Deploy the contract
  const doubleDigiDaigaku = await hre.ethers.getContractFactory('DoubleDigiDaigaku')
  const DoubleDigiDaigaku = await doubleDigiDaigaku.deploy(
    _initBaseURI)
await DoubleDigiDaigaku.deployed()

  console.log('DoubleDigiDaigaku deployed to:', DoubleDigiDaigaku.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })