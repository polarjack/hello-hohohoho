const Wallet = require('ethereumjs-wallet')

const walletNCCU = Wallet.generate('nccu')


console.log(walletNCCU.toV3String('nccu'))
