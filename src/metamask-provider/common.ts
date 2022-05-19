import Web3 from 'web3';
import { ContractType, TokenFormat } from './type';

export const getMarketContractNameByNFTContractName = (
  nftContractName: ContractType
): ContractType => {
  switch (nftContractName) {
    case 'FantasyToolNFTContract':
      return 'FantasyToolMarketContract';
    case 'FantasyGeneNFTContract':
      return 'FantasyGeneMarketContract';
    case 'FantasyLandNFTContract':
      return 'FantasyLandMarketContract';
    case 'FantasyGachaBoxNFTContract':
      return 'FantasyGachaBoxMarketContract';
    case 'FantasyToolMaterialNFTContract':
      return 'FantasyToolMaterialMarketContract';
    default:
      throw new Error(
        `getMarketContractNameByNFTContractName Unsupported contract name: ${nftContractName}`
      );
  }
};

export const getNFTContractNameByMarketContractName = (
  nftMarketContractName: ContractType
): ContractType => {
  switch (nftMarketContractName) {
    case 'FantasyToolMarketContract':
      return 'FantasyToolNFTContract';
    case 'FantasyGeneMarketContract':
      return 'FantasyGeneNFTContract';
    case 'FantasyLandMarketContract':
      return 'FantasyLandNFTContract';
    case 'FantasyGachaBoxMarketContract':
      return 'FantasyGachaBoxNFTContract';
    case 'FantasyToolMaterialMarketContract':
      return 'FantasyToolMaterialNFTContract';
    default:
      throw new Error(
        `getNFTContractNameByMarketContractName Unsupported contract name: ${nftMarketContractName}`
      );
  }
};

export const getTokenFormatOfNFTByNftContractName = (
  nftContractName: ContractType
): TokenFormat => {
  switch (nftContractName) {
    case 'FantasyToolNFTContract':
    case 'FantasyGeneNFTContract':
    case 'FantasyLandNFTContract':
      return TokenFormat.ERC721;
    case 'FantasyGachaBoxNFTContract':
    case 'FantasyToolMaterialNFTContract':
      return TokenFormat.ERC1155;
    default:
      throw new Error(`getTokenFormatOfNFT Unsupported contract name: ${nftContractName}`);
  }
};

export const isValidAddress = (address: string): boolean => {
  return Web3.utils.isAddress(address);
};
