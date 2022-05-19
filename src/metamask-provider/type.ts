export type ContractType =
  | 'FantasyTokenContract'
  | 'FantasyToolNFTContract'
  | 'FantasyLandNFTContract'
  | 'FantasyGeneNFTContract'
  | 'FantasyGachaBoxNFTContract'
  | 'FantasyToolMaterialNFTContract'
  | 'FantasyToolMarketContract'
  | 'FantasyLandMarketContract'
  | 'FantasyGeneMarketContract'
  | 'FantasyGachaBoxMarketContract'
  | 'FantasyToolMaterialMarketContract';

export interface ISaleInfoFromMetaMask {
  isAvailableForSale: boolean;
  saleId?: string;
  amount?: string;
  tokenId?: string;
  price?: string;
  sellTime?: number;
}

export enum TokenFormat {
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',
}
