import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import BN from 'bn.js';
import { TransactionReceipt } from 'web3-core';
import { getConfig } from '../globals/env-config';
import { appUtils } from '../common';
import { METAMASK_NETWORK } from './constants';
import Market721ABI from './ABIs/market/Market721_ABI.json';
import Market1155ABI from './ABIs/market/Market1155_ABI.json';
import FantasyToolNFTABI from './ABIs/nft/FantasyToolNFT_ABI.json';
import FantasyLandNFTABI from './ABIs/nft/FantasyLandNFT_ABI.json';
import FantasyGeneNFTABI from './ABIs/nft/FantasyGeneNFT_ABI.json';
import ERC1155ABI from './ABIs/nft/ERC1155_ABI.json';
import ERC20ABI from './ABIs/ERC20_ABI.json';
import { ContractType, ISaleInfoFromMetaMask, TokenFormat } from './type';
import * as metaMaskCommon from './common';

const MetamaskNetwork = METAMASK_NETWORK[getConfig('REACT_APP_ENV')];
const ContractAddress: Record<ContractType, string> = {
  FantasyTokenContract: getConfig('REACT_APP_FANTASY_TOKEN_CONTRACT_ADDRESS'),
  FantasyToolNFTContract: getConfig('REACT_APP_FANTASY_TOOL_NFT_CONTRACT_ADDRESS'),
  FantasyLandNFTContract: getConfig('REACT_APP_FANTASY_LAND_NFT_CONTRACT_ADDRESS'),
  FantasyGeneNFTContract: getConfig('REACT_APP_FANTASY_GENE_NFT_CONTRACT_ADDRESS'),
  FantasyGachaBoxNFTContract: getConfig('REACT_APP_FANTASY_GACHA_BOX_NFT_CONTRACT_ADDRESS'),
  FantasyToolMaterialNFTContract: getConfig('REACT_APP_FANTASY_TOOL_MATERIAL_NFT_CONTRACT_ADDRESS'),
  FantasyToolMarketContract: getConfig('REACT_APP_FANTASY_TOOL_MARKET_CONTRACT_ADDRESS'),
  FantasyLandMarketContract: getConfig('REACT_APP_FANTASY_LAND_MARKET_CONTRACT_ADDRESS'),
  FantasyGeneMarketContract: getConfig('REACT_APP_FANTASY_GENE_MARKET_CONTRACT_ADDRESS'),
  FantasyGachaBoxMarketContract: getConfig('REACT_APP_FANTASY_GACHA_BOX_MARKET_CONTRACT_ADDRESS'),
  FantasyToolMaterialMarketContract: getConfig(
    'REACT_APP_FANTASY_TOOL_MATERIAL_MARKET_CONTRACT_ADDRESS'
  ),
};

export default class MetamaskProvider {
  static Contracts: Record<string, Contract> = {};
  static web3: Web3;
  static getEthereum = (): any | undefined => {
    const { ethereum } = window as any;
    return ethereum;
  };
  static getWeb3 = (): Web3 => {
    if (this.web3) {
      return this.web3;
    }
    const web3 = new Web3(new Web3.providers.HttpProvider(MetamaskNetwork.rpcUrl));
    this.web3 = web3;
    return web3;
  };
  static getContract = async (type: ContractType): Promise<Contract> => {
    const web3 = this.getWeb3();
    if (this.Contracts[type]) {
      return this.Contracts[type];
    }
    let abi = null;
    const address = ContractAddress[type];
    switch (type) {
      case 'FantasyTokenContract':
        abi = ERC20ABI;
        break;
      case 'FantasyToolNFTContract':
        abi = FantasyToolNFTABI;
        break;
      case 'FantasyLandNFTContract':
        abi = FantasyLandNFTABI;
        break;
      case 'FantasyGeneNFTContract':
        abi = FantasyGeneNFTABI;
        break;
      case 'FantasyGachaBoxNFTContract':
        abi = ERC1155ABI;
        break;
      case 'FantasyToolMaterialNFTContract':
        abi = ERC1155ABI;
        break;
      case 'FantasyToolMarketContract':
        abi = Market721ABI;
        break;
      case 'FantasyLandMarketContract':
        abi = Market721ABI;
        break;
      case 'FantasyGeneMarketContract':
        abi = Market721ABI;
        break;
      case 'FantasyGachaBoxMarketContract':
        abi = Market1155ABI;
        break;
      case 'FantasyToolMaterialMarketContract':
        abi = Market1155ABI;
        break;
      default:
        throw new Error(`Contract type ${type} not found`);
    }
    const contract = new web3.eth.Contract(abi as AbiItem[], address);
    this.Contracts[type] = contract;
    return contract;
  };
  // TODO: check MetaMask installed yet, if not disable the login with MetaMask button
  static checkIsInstalled = (): Boolean => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const ethereum = MetamaskProvider.getEthereum();
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  static requestConnect = async (): Promise<void> => {
    const ethereum = MetamaskProvider.getEthereum();
    // Will open the MetaMask UI
    // You should disable this button while the request is pending!
    if (ethereum) {
      await ethereum.request({ method: 'eth_requestAccounts' });
    }
  };

  static getAccountAddress = async (): Promise<string | null> => {
    const ethereum = MetamaskProvider.getEthereum();
    if (!ethereum) {
      return null;
    }
    //we use eth_accounts because it returns a list of addresses owned by us.
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    //We take the first address in the array of addresses and display it
    if (accounts && accounts.length > 0) {
      return Web3.utils.toChecksumAddress(accounts[0]);
    }
    return null;
  };

  static checkIsMetaMaskConnected = async (): Promise<boolean> => {
    const address = await MetamaskProvider.getAccountAddress();
    return !!address;
  };

  static addListenerAccountChange = (callback: (newAddress: string | null) => void) => {
    const ethereum = MetamaskProvider.getEthereum();
    if (!ethereum) {
      return null;
    }
    ethereum.on('accountsChanged', function (accounts: string[]) {
      if (accounts && accounts.length > 0) {
        callback(Web3.utils.toChecksumAddress(accounts[0]));
      } else {
        callback(null);
      }
    });
  };

  static addListenerNetworkChange = (callback: () => void) => {
    const ethereum = MetamaskProvider.getEthereum();
    if (!ethereum) {
      return null;
    }
    ethereum.on('networkChanged', function () {
      callback();
    });
  };

  static getCurrentNetwork = (): string => {
    const ethereum = MetamaskProvider.getEthereum();
    return ethereum.networkVersion;
  };

  static checkIsConnectedToBSCNetwork = (): boolean => {
    return this.getCurrentNetwork() === MetamaskNetwork.chainId;
  };

  static requestSwitchToBSCNetwork = async (): Promise<void> => {
    const ethereum = MetamaskProvider.getEthereum();
    if (ethereum) {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: MetamaskNetwork.chainHex }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: MetamaskNetwork.chainHex,
                  chainName: MetamaskNetwork.name,
                  nativeCurrency: {
                    name: MetamaskNetwork.currencyName,
                    symbol: MetamaskNetwork.currencySymbol,
                    decimals: 18,
                  },
                  rpcUrls: [MetamaskNetwork.rpcUrl],
                  blockExplorerUrls: [MetamaskNetwork.explorerUrl],
                },
              ],
            });
          } catch (addError) {
            throw addError;
          }
        } else {
          throw switchError;
        }
      }
    }
  };

  static checkApprovedNFTToFixedPriceSaleMarket = async (
    nftContractName: ContractType,
    tokenId: string
  ): Promise<boolean> => {
    const nftMarketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const nftContract = await this.getContract(nftContractName);
    const tokenFormat = metaMaskCommon.getTokenFormatOfNFTByNftContractName(nftContractName);
    switch (tokenFormat) {
      case TokenFormat.ERC721: {
        const approvedAddress = await nftContract.methods.getApproved(tokenId).call();
        return approvedAddress === ContractAddress[nftMarketContractName];
      }
      case TokenFormat.ERC1155: {
        const currentAccountAddress = await this.getAccountAddress();
        return nftContract.methods
          .isApprovedForAll(currentAccountAddress, ContractAddress[nftMarketContractName])
          .call();
      }
      default:
        throw new Error(
          `checkApprovedNFTToFixedPriceSaleMarket Unsupported token format: ${tokenFormat}`
        );
    }
  };

  static checkApprovedFantasyTokenToFixedPriceSaleMarket = async (
    nftContractName: ContractType
  ): Promise<boolean> => {
    const erc20TokenContract = await this.getContract('FantasyTokenContract');
    const nftMarketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const owner = await this.getAccountAddress();
    const approvedAmount = await erc20TokenContract.methods
      .allowance(owner, ContractAddress[nftMarketContractName])
      .call();
    return new BN(approvedAmount).gt(new BN(0));
  };

  static getSaleInfoBySaleId = async (
    marketContractName: ContractType,
    saleId: string
  ): Promise<ISaleInfoFromMetaMask> => {
    const marketContract = await this.getContract(marketContractName);
    try {
      const saleInfo = await marketContract.methods.getSale(saleId).call();
      if (saleInfo.status === '1') {
        // 1: sale is active
        return {
          isAvailableForSale: true,
          saleId,
          amount: saleInfo.amount,
          tokenId: saleInfo.tokenId,
          price: saleInfo.price,
          sellTime: saleInfo.sellTime,
        };
      }
      return {
        isAvailableForSale: false,
      };
    } catch (e) {
      console.error(e);
      return {
        isAvailableForSale: false,
      };
    }
  };

  static getFixedPriceSaleInfoByTokenId721 = async (
    nftContractName: ContractType,
    tokenId: string
  ): Promise<ISaleInfoFromMetaMask> => {
    const nftMarketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const marketContract = await this.getContract(nftMarketContractName);
    const saleId = await marketContract.methods.getSaleIdFromTokenId(tokenId).call();
    if (saleId === '0') {
      return {
        isAvailableForSale: false,
      };
    }
    return this.getSaleInfoBySaleId(nftMarketContractName, saleId);
  };

  static getFixedPriceSaleInfoByTokenId1155 = async (
    nftContractName: ContractType,
    tokenId: string
  ): Promise<ISaleInfoFromMetaMask[]> => {
    const nftMarketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const marketContract = await this.getContract(nftMarketContractName);
    const owner = await this.getAccountAddress();
    const saleInfos = [];
    let index = 0;
    while (true) {
      try {
        const [saleId] = await marketContract.methods
          .getUserSaleIds(owner, index.toString(10), '1')
          .call();
        if (saleId === '0') {
          break;
        }
        const saleInfo = await this.getSaleInfoBySaleId(nftMarketContractName, saleId);
        if (saleInfo.tokenId === tokenId) {
          saleInfos.push(saleInfo);
        }
        index += 1;
      } catch (e) {
        break;
      }
    }

    return saleInfos;
  };

  static getTransactionReceipt = async (txHash: string): Promise<TransactionReceipt> => {
    const receipt = await this.getWeb3().eth.getTransactionReceipt(txHash);
    if (!receipt) {
      await appUtils.sleep(1000);
      return this.getTransactionReceipt(txHash);
    }
    return receipt;
  };

  static requestSwitchNetworkIfUsedWrongNetwork = async (): Promise<void> => {
    if (!this.checkIsConnectedToBSCNetwork()) {
      await this.requestSwitchToBSCNetwork();
    }
  };

  static sendTransaction = async (data: string, to: string): Promise<TransactionReceipt> => {
    await this.requestSwitchNetworkIfUsedWrongNetwork();
    const transactionParameters = {
      to,
      from: await this.getAccountAddress(),
      data,
      chainId: MetamaskNetwork.chainId, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };

    const txHash = await this.getEthereum().request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    return this.getTransactionReceipt(txHash);
  };

  static approvedFantasyTokenToFixedPriceSaleMarket = async (
    nftContractName: ContractType
  ): Promise<TransactionReceipt> => {
    const tokenContract = await this.getContract('FantasyTokenContract');
    const nftMarketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const maxSupply = await tokenContract.methods.totalSupply().call();
    const data = tokenContract.methods
      .approve(ContractAddress[nftMarketContractName], maxSupply)
      .encodeABI();
    return this.sendTransaction(data, ContractAddress.FantasyTokenContract);
  };

  static approvedNFTToFixedPriceSaleMarket = async (
    nftContractName: ContractType,
    tokenId: string
  ): Promise<TransactionReceipt> => {
    const nftMarketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const nftContract = await this.getContract(nftContractName);
    const tokenFormat = metaMaskCommon.getTokenFormatOfNFTByNftContractName(nftContractName);
    let data;
    switch (tokenFormat) {
      case TokenFormat.ERC721: {
        data = nftContract.methods
          .approve(ContractAddress[nftMarketContractName], new BN(tokenId))
          .encodeABI();
        break;
      }
      case TokenFormat.ERC1155: {
        data = nftContract.methods
          .setApprovalForAll(ContractAddress[nftMarketContractName], true)
          .encodeABI();
        break;
      }
      default:
        throw new Error(
          `approvedNFTToFixedPriceSaleMarket Unsupported token format: ${tokenFormat}`
        );
    }
    return this.sendTransaction(data, ContractAddress[nftContractName]);
  };

  static addNFTToFixedPriceSaleMarket = async (
    nftContractName: ContractType,
    tokenId: string,
    price: string,
    amount: string
  ): Promise<TransactionReceipt> => {
    const marketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const marketContract = await this.getContract(marketContractName);
    const tokenFormat = metaMaskCommon.getTokenFormatOfNFTByNftContractName(nftContractName);
    let data;
    switch (tokenFormat) {
      case TokenFormat.ERC721: {
        data = marketContract.methods.add(new BN(tokenId), new BN(price)).encodeABI();
        break;
      }
      case TokenFormat.ERC1155: {
        data = marketContract.methods
          .add(new BN(tokenId), new BN(amount), new BN(price))
          .encodeABI();
        break;
      }
      default:
        throw new Error(`addNFTToFixedPriceSaleMarket Unsupported token format: ${tokenFormat}`);
    }
    return this.sendTransaction(data, ContractAddress[marketContractName]);
  };

  static removeSaleFromFixedSaleMarket = async (
    nftContractName: ContractType,
    saleId: string
  ): Promise<TransactionReceipt> => {
    const marketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const nftMarketContract = await this.getContract(marketContractName);
    const data = nftMarketContract.methods.cancel(saleId).encodeABI();
    return this.sendTransaction(data, ContractAddress[marketContractName]);
  };

  static updateSalePriceOfNFTFromFixedSaleMarket = async (
    nftContractName: ContractType,
    saleId: string,
    newPrice: string
  ): Promise<TransactionReceipt> => {
    const marketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const nftMarketContract = await this.getContract(marketContractName);
    const data = nftMarketContract.methods.setPrice(saleId, new BN(newPrice)).encodeABI();
    return this.sendTransaction(data, ContractAddress[marketContractName]);
  };

  static buyNFTFromFixedSaleMarket = async (
    nftContractName: ContractType,
    saleId: string
  ): Promise<TransactionReceipt> => {
    const marketContractName =
      metaMaskCommon.getMarketContractNameByNFTContractName(nftContractName);
    const nftMarketContract = await this.getContract(marketContractName);
    const data = nftMarketContract.methods.buy(saleId).encodeABI();
    return this.sendTransaction(data, ContractAddress[marketContractName]);
  };

  static getFTCBalance = async (): Promise<string> => {
    const tokenContract = await this.getContract('FantasyTokenContract');
    return tokenContract.methods.balanceOf(await this.getAccountAddress()).call();
  };

  static transferNFT = async (
    nftContractName: ContractType,
    toAddress: string,
    tokenId: string,
    amount: string
  ): Promise<TransactionReceipt> => {
    const tokenContract = await this.getContract(nftContractName);
    const owner = await this.getAccountAddress();
    const tokenFormat = metaMaskCommon.getTokenFormatOfNFTByNftContractName(nftContractName);
    let data;
    switch (tokenFormat) {
      case TokenFormat.ERC721: {
        data = tokenContract.methods.transferFrom(owner, toAddress, new BN(tokenId)).encodeABI();
        break;
      }
      case TokenFormat.ERC1155: {
        data = tokenContract.methods
          .safeTransferFrom(owner, toAddress, new BN(tokenId), new BN(amount), '0x')
          .encodeABI();
        break;
      }
      default:
        throw new Error(`transferNFT Unsupported token format: ${tokenFormat}`);
    }
    return this.sendTransaction(data, ContractAddress[nftContractName]);
  };
}

export { metaMaskCommon };
