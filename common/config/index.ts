import { Network, ContractType } from '../types'

export { TW_SUPPORTED_CHAINS, DefaultChain } from './chains'
export { wrappedContracts } from './wrappedContracts'
export { LiveTheLifeTV } from './rollupChains' 

export const BERACHAINEXPLORER_URL = "https://artio.beratrail.io/";

export const BERACHAIN = {
// === Required information for connecting to the network === \\
chainId: 80085, // Chain ID of the network
// Array of RPC URLs to use
rpc: 
[
  "https://rpc.ankr.com/berachain_testnet",
  "https://rpc.ankr.com/berachain_testnet"
],

// === Information for adding the network to your wallet (how it will appear for first time users) === \\
// Information about the chain's native currency (i.e. the currency that is used to pay for gas)
nativeCurrency: {
  decimals: 18,
  name: "Berachain Artio",
  symbol: "BERA",
},
shortName: "berachain", // Display value shown in the wallet UI
slug: "berachain", // Display value shown in the wallet UI
testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
chain: "Berachain Artio", // Name of the network
name: "Berachain Artio", // Name of the network
}

export const URLS = {
  [Network.MAINNET]: {
    reservoir: 'https://api.reservoir.tools',
    tw: '',
    alchemy: 'https://eth-mainnet.g.alchemy.com',
    explorer: 'https://etherscan.io',
    openzeppelin: '',
  },
  [Network.POLYGON]: {
    reservoir: 'https://api-polygon.reservoir.tools',
    tw: '',
    alchemy: 'https://polygon-mainnet.g.alchemy.com',
    explorer: 'https://polygonscan.com',
    openzeppelin: '',
  },
  [Network.MUMBAI]: {
    reservoir: 'https://api-mumbai.reservoir.tools',
    tw: '',
    alchemy: 'https://polygon-mumbai.g.alchemy.com',
    explorer: 'https://mumbai.polygonscan.com',
    openzeppelin:
      'https://api.defender.openzeppelin.com/autotasks/3d39e44f-5ed0-4c66-9107-8f45e4c1b918/runs/webhook/d3bad3c5-947c-4dde-8868-915e797a8bc4/SkSiPovrShFkTHST4cPCHw',
  },
  [Network.ARBITRUM]: {
    reservoir: 'https://api-arbitrum.reservoir.tools',
    tw: '',
    alchemy: 'https://arb-mainnet.g.alchemy.com',
    explorer: 'https://arbiscan.io',
    openzeppelin: '',
  },
  [Network.ARBITRUM_GOERLI]: {
    reservoir: '',
    tw: '',
    alchemy: 'https://arb-goerli.g.alchemy.com',
    explorer: 'https://goerli.arbiscan.io',
    openzeppelin: '',
  },
  [Network.OPTIMISM]: {
    reservoir: 'https://api-optimism.reservoir.tools',
    tw: '',
    alchemy: '',
    explorer: 'https://optimistic.etherscan.io',
    openzeppelin: '',
  },
}

export const COLLECTIONS = {
  [Network.MAINNET]: [
    {
      id: '948d238e355bb57d29622db0ef59573d72b1d9f5936fd4e7edd8f95273a91c7d',
      name: 'Curated',
    },
    {
      id: '4e9d6844db1a1f932b7c74923bf94f558c2ce81e6131b7e890c052519ee62a01',
      name: 'Iconic Gems',
    },
    {
      id: '340e5ea8e4d9623efc48f6397246645fe3c84e4b580dfa8974cd6d92b2cf4568',
      name: 'AI Inspired',
    },
    {
      id: '49cfe7d24b6697f937f0da4f30884016234be646fbdba298b1176e889a37d0e6',
      name: 'Generative',
    },
    {
      id: 'c0b535eb34769e565aa5a03751a41fb4dea837909801db3fd6ad7d530d2742ce',
      name: 'Pixel Art',
    },
    {
      id: '837f348d4241ee0112c505c1e6bd8e2031eb5485e3c99f0c2a453dbb0f54588e',
      name: 'PFP',
    },
  ],
  [Network.POLYGON]: [
    {
      id: '5bc9be317c2b9d36e7ec0ceff90f9c86443862391d96f5569377abd1463d4271',
      name: 'Curated',
    },
  ],
  [Network.ARBITRUM]: [
    {
      id: 'e7491360f8ea4f48278f2836057028e04e4e5203de9d3141af17b2d8eac1f702',
      name: 'Curated',
    },
  ],
  [Network.OPTIMISM]: [
    {
      id: '2e6f356700068babbb4e2d802c03c3f3212ca7149065b655b18564f561f0af5a',
      name: 'Curated',
    },
  ],
  [Network.MUMBAI]: [],
  [Network.LIVETHELIFETV]: [
    {
      id: '2e6f356700068babbb4e2d802c03c3f3212ca7149065b655b18564f561f0af5a',
      name: 'Curated',
    },
  ],
}

export const FEATURED_DROP = '0x3C9A5EeB4D7126D759B64B9129C23012CF802313'

export const NFTDrops = ['0xcE998593C8f0790ff41a488c83B2Af5E47C27258', '0x025c59a275Ca6DB964eeE1694c6614AcE62F1568']

// export const FREE_MINT_CONTRACT = '0x009C93c2285A5Eb536f3a9607A138e68094B94Bd' 0x5929B982f037064195EfFf06CDF140b931233674
export const FREE_MINT_CONTRACT = '0x210120A3efb29f9FDF466DaAC43fE3a4098fef02'
export const FREE_MINT_TOKEN_ID = 0

export const BURN_TO_MINT_1155 = '0xd6aC136fC352eB4EF372095CC9fe9ED7dfEdF504'
export const BURN_TO_MINT_721 = '0xf76afb63f9A808cF6A0F05Ea888C014e89d82F0C'

export const BURN_TO_MINT = {
  odessyGenesisCollection: {
    sourceContract: '0xd6aC136fC352eB4EF372095CC9fe9ED7dfEdF504',
    targets: [
      { tokenId: '0', targetContract: '0xf76afb63f9A808cF6A0F05Ea888C014e89d82F0C' },
      { tokenId: '1', targetContract: '' },
      { tokenId: '2', targetContract: '' },
    ],
  },
}

export const MINT_PASSES = [
  {
    contract: '0x9943b6498bC20Ca6237fF9DD29c870205F997B97',
    tokenId: '0',
    network: Network.ARBITRUM,
    type: 'edition-drop' as ContractType,
  },
  {
    contract: '0x9943b6498bC20Ca6237fF9DD29c870205F997B97',
    tokenId: '1',
    network: Network.ARBITRUM,
    type: 'edition-drop' as ContractType,
  },
  {
    contract: '0x9943b6498bC20Ca6237fF9DD29c870205F997B97',
    tokenId: '2',
    network: Network.ARBITRUM,
    type: 'edition-drop' as ContractType,
  },
]

export const DEGEN_VIBES = [
  {
    contract: '0x210120A3efb29f9FDF466DaAC43fE3a4098fef02',
    tokenId: '0',
    network: Network.BERA,
    type: 'edition-drop' as ContractType,
  },
  {
    contract: '0x210120A3efb29f9FDF466DaAC43fE3a4098fef02',
    tokenId: '0',
    network: Network.BERA,
    type: 'edition-drop' as ContractType,
  },
  {
    contract: '0x210120A3efb29f9FDF466DaAC43fE3a4098fef02',
    tokenId: '0',
    network: Network.BERA,
    type: 'edition-drop' as ContractType,
  },
]
  export const LIVE_LIFE = [
    {
      contract: '0x210120A3efb29f9FDF466DaAC43fE3a4098fef02',
      tokenId: '0',
      network: Network.LIVETHELIFETV,
      type: 'edition-drop' as ContractType,
    },
    {
      contract: '0x210120A3efb29f9FDF466DaAC43fE3a4098fef02',
      tokenId: '0',
      network: Network.LIVETHELIFETV,
      type: 'edition-drop' as ContractType,
    },
    {
      contract: '0x210120A3efb29f9FDF466DaAC43fE3a4098fef02',
      tokenId: '0',
      network: Network.LIVETHELIFETV,
      type: 'edition-drop' as ContractType,
    },
]

export type ContractTokenId = [string, number]
