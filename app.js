import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

web3.eth.estimateGas({
    to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
    data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
})
.then(console.log);
