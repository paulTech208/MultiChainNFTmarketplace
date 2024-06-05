// Define the structure of your custom chain based on what's expected by your application
interface RollupChain {
    chainId: number;
    name: string;
    chain: string;
    slug: "conduit:livethelifetv-n17ly4dwnu";
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    shortName: string,
    rpc: string[];
    explorers: [
      {
        name: string,
        standard: string,
        url: string,
      }  
    ]
  }


export const LiveTheLifeTV: RollupChain = {
  chainId: 6942, 
  name: 'LiveTheLifeTV',
  chain: 'livethelifetv',
  slug: "conduit:livethelifetv-n17ly4dwnu",
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  shortName: "LTL",
  rpc: ['https://rpc-livethelifetv-n17ly4dwnu.t.conduit.xyz'],
  explorers: [
    {
      name: "Blockscout",
      standard: "EIP3091",
      url: "https://explorerl2new-livethelifetv-n17ly4dwnu.t.conduit.xyz",
    }  
  ]
};

