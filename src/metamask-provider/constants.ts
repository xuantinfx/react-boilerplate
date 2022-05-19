export const METAMASK_NETWORK: Record<
  string,
  {
    chainId: string;
    chainHex: string;
    rpcUrl: string;
    name: string;
    currencyName: string;
    currencySymbol: string;
    explorerUrl: string;
  }
> = {
  development: {
    chainId: '97',
    chainHex: '0x61',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    name: 'Binance Smart Chain Testnet',
    currencyName: 'Binance Testnet',
    currencySymbol: 'tBNB',
    explorerUrl: 'https://testnet.bscscan.com/',
  },
  production: {
    chainId: '56',
    chainHex: '0x38',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    name: 'Binance Smart Chain Mainnet',
    currencyName: 'Binance',
    currencySymbol: 'BNB',
    explorerUrl: 'https://bscscan.com',
  },
};
