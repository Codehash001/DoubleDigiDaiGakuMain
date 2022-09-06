const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
  title: 'DoubleDigiDaigaku Dapp',
  description: 'DoubleDigiDaigaku NFT minting Dapp',
  contractAddress: '0xAE0b454e9a3CB062A83C81957A410B0256891E53',
  maxMintAmount: 1602,
  presaleMaxMintAmount: 1,
  preSalePrice: 0.00,
  publicSalePrice:0.0069
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 4, // Rinkeby
  darkMode: true,
  walletSelect: {
    description:'Plaese select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'DoubleDigiDaigaku Dapp'
      },
      
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis'},
      { walletName: 'authereum' },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'DoubleDigiDaigaku Dapp'
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }