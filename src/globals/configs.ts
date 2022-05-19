import { getConfig } from './env-config';

export const APP_ENV = getConfig('REACT_APP_ENV');

export const GRAPHQL_API = getConfig('REACT_APP_FANTASY_GRAPHQL_API');
export const RESOURCE_URL = getConfig('REACT_APP_FANTASY_RESOURCE_URL');
export const ADDRESS_EXPLORER_URL = getConfig('REACT_APP_ADDRESS_EXPLORER_URL');
export const TRANSACTION_EXPLORER_URL = getConfig('REACT_APP_TRANSACTION_EXPLORER_URL');
export const FANTASY_TOOL_NFT_CONTRACT_ADDRESS = getConfig(
  'REACT_APP_FANTASY_TOOL_NFT_CONTRACT_ADDRESS'
);
export const FANTASY_LAND_NFT_CONTRACT_ADDRESS = getConfig(
  'REACT_APP_FANTASY_LAND_NFT_CONTRACT_ADDRESS'
);
export const FANTASY_GENE_NFT_CONTRACT_ADDRESS = getConfig(
  'REACT_APP_FANTASY_GENE_NFT_CONTRACT_ADDRESS'
);

export const FANTASY_GACHA_BOX_NFT_CONTRACT_ADDRESS = getConfig(
  'REACT_APP_FANTASY_GACHA_BOX_NFT_CONTRACT_ADDRESS'
);

export const FANTASY_TOOL_MATERIAL_NFT_CONTRACT_ADDRESS = getConfig(
  'REACT_APP_FANTASY_TOOL_MATERIAL_NFT_CONTRACT_ADDRESS'
);
export const MINING_TOOL_RESOURCE_URL = `${RESOURCE_URL}/static/tool`;
export const LAND_RESOURCE_URL = `${RESOURCE_URL}/static/land`;
export const GENE_RESOURCE_URL = `${RESOURCE_URL}/static/gene`;

export const isShowSaleHistories = getConfig('REACT_APP_IS_SHOW_SALE_HISTORIES') === 'true';
export const isShowDashboardStatistics =
  getConfig('REACT_APP_IS_SHOW_DASHBOARD_STATISTICS') === 'true';

export const isDevelopment = APP_ENV === 'development';
