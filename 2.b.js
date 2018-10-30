// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// pubKey
const pubKey = wallet.getPublicKey();


let public_key_hash = keccak256(pubKey)

let address = '0x' + public_key_hash.slice(public_key_hash.length - 40, public_key_hash.length)

console.log('address:', address);

