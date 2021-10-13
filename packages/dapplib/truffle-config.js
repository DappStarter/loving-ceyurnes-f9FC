require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index random nominee concert include industry fresh genre'; 
let testAccounts = [
"0xca1b32d3f27c4c78c06670edcf9913f94aa38892b6f14489a6bf481534dcf231",
"0xe3372ab8f300b286d4ff801a03db260a11fd94248e547430d4d28fc7b01b675c",
"0xf33d0eaa358496bfa702ca004edd0b2a2034c35c932fc36b2026021b3d9b11ae",
"0x36ae1c082bdc18ab669216153c32fa8d14344173efa6d7993b6962b71e0475de",
"0x048c70d1bd64db8c98bff848067655fd55532fd73770f099efc9867965280c01",
"0x891a8cee37be5d1a71df35905e5a1ea2884457146b5c378509b4778d7f199c79",
"0xab46b85c3c73ee9bf4fa8a0ce0bc2051986f66db9b77dce1ee45557b537bc7f5",
"0x38cdbaa1c12679af187b879508fc03d0fbfbc8b9c706b1bb6d35f12a0698c7d0",
"0x56d64893535314552bf6bc6ba74dbfad35ee6e00a7d3b153f1938155886f0311",
"0xcd8c9da0f434073f814612288489c622d5120bcb79abae74ebd1a44ac6904710"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

