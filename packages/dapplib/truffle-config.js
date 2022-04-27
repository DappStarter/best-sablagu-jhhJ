require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot current raise ranch coconut inside light army gentle'; 
let testAccounts = [
"0xe2c93747b9c21776cc5038e024e3fe08a609e71e3530e09e64b39fe801187591",
"0xd4a789c9b26ff3300812f5156f9c637d0cd1e927fbd131887b7a98c0e79a6ed0",
"0x2d685365f4132c3138ce8d61d5bcec3a10e0547a30449faa5973c1a73394c00a",
"0x4d4c13a76aa45677f15c9a1b93e47dbf86e1373cd5ad20ca06480583775ebaec",
"0x84c5fd552c1d52b9b390f176e72d21f66794ede3cbebe905d143c014eed737c7",
"0xd3ca7c3a2ebcf4b0f229f2416ac301ac49f711930c398e5e26e153bf588cfc89",
"0x217ee85c42456c53b450cf4c9d83f8865a1e1fa3c358b2c62654a74ec26c03af",
"0x83726e7eb767a49ccfef75980b6c6e320d87113d27d24df6b425c0cb254c9d42",
"0x2b0c0a67458204a2ab7da6b2b86f06fdc9fc942dc6fb7332180ea1b64f0ebe72",
"0x60139dd053485d081bc5fda9ba5ee975230e52a7e23725ce630ca5a6251bc872"
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

