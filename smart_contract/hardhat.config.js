require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/zPxQv3VGvwYrkxAq0-7uL7BY6W4EF9FS',
      accounts: [
        'f10b3fcb03db9e0eb78517bc38a02c2faa1f1ef71011489c9d3bfeb4779dbe1f',
      ],
    },
  },
}