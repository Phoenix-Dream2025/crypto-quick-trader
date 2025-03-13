import { Token } from "@/utils/types";

const HYGRAPH_ENDPOINT = 'http://46.4.5.53:4000/graphql';  // Replace with your endpoint

const GET_ALL_Token_QUERY = `
    query { tokens { address name symbol logoURI decimals price lastTradeUnixTime liquidity mc v24hChangePercent v24hUSD } }
    `;
    
// const GET_SINGLE_POST_QUERY = `
// query GET_SINGLE_POST($slug: String!) {
//     post(where: { slug: $slug }) {
//     title
//     summary
//     id
//     createdAt
//     coverImage {
//         url(transformation: { image: { resize: { height: 768, width: 1366 } } })
//     }
//     content {
//         json
//     }
//     author {
//         id
//         linkedIn
//         twitter
//         name
//         photo {
//         url
//         }
//     }
//     date
//     }
// }
// `;
    
// const GET_TAGS_QUERY = `
// query GET_TAGS {
//     categories {
//     name
//     slug
//     }
// }
// `;
    
// const GET_POST_FOR_TAG_QUERY = `
// query GetCategoryPost($slug: String!) {
//     postsConnection(where: { categories_some: { slug: $slug } }) {
//     edges {
//         cursor
//         node {
//         author {
//             bio
//             name
//             id
//             photo {
//             url
//             }
//         }
//         createdAt
//         slug
//         title
//         summary
//         coverImage {
//             url
//         }
//         categories {
//             name
//             slug
//         }
//         date
//         }
//     }
//     }
// }
// `;

export const getAllTokenList = async (): Promise<Token[]> => {
    // try{
        const res = await fetch(HYGRAPH_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'query': GET_ALL_Token_QUERY
            })
        });
        const tokenList = await res.json();
        const mockTokens: Token[] = [
            {
                id: "1",
                name: "Solana",
              symbol: "SOL",
              price: 93.42,
              priceChange24h: 5.8,
              volume24h: 2453789054,
              logoUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
              address: "So11111111111111111111111111111111111111112",
            },
            
            {
              id: "2",
              name: "Raydium",
              symbol: "RAY",
              price: 0.385,
              priceChange24h: -2.1,
              volume24h: 58934201,
              logoUrl: "https://cryptologos.cc/logos/raydium-ray-logo.png",
              address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
            },
            {
              id: "3",
              name: "Serum",
              symbol: "SRM",
              price: 0.051,
              priceChange24h: 1.2,
              volume24h: 12489503,
              logoUrl: "https://cryptologos.cc/logos/serum-srm-logo.png",
              address: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",
            },
            {
              id: "4",
              name: "Mango",
              symbol: "MNGO",
              price: 0.021,
              priceChange24h: -3.7,
              volume24h: 5893421,
              logoUrl: "https://cryptologos.cc/logos/mango-markets-mngo-logo.png",
              address: "MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac",
            },
            {
              id: "5",
              name: "Orca",
              symbol: "ORCA",
              price: 0.641,
              priceChange24h: 7.5,
              volume24h: 34562108,
              logoUrl: "https://cryptologos.cc/logos/orca-orca-logo.png",
              address: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
            },
            {
              id: "6",
              name: "Bonk",
              symbol: "BONK",
              price: 0.000024,
              priceChange24h: 15.3,
              volume24h: 456721089,
              logoUrl: "https://cryptologos.cc/logos/bonk-bonk-logo.png",
              address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
            },
          ];
        let tokens :Token[] = [];
        tokenList.data.tokens.map((data, id)=>{
            const token = {
                    id: ""+id,
                    name: data.name,
                    symbol: data.symbol,
                    price: data.price,
                    priceChange24h: data.v24hChangePercent,
                    volume24h: data.v24hUSD,
                    logoUrl: data.logoURI,
                    address: data.address,
            }
            tokens.push(token);
        })
        console.log(tokens);
        console.log(mockTokens);

        return tokens;
        
    // }
    // catch(err:any){
    //     throw new Error(err.message);
    // }
}

// try {
//     const response = await fetch(HYGRAPH_ENDPOINT, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         query: GET_ALL_Token_QUERY
//     })
//     });
    
    
    
    
//     const response = await fetch(HYGRAPH_ENDPOINT, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         query: GET_SINGLE_POST_QUERY,
//         variables: {
//         slug: 'usher-in-a-new-era-of-footwear-innovation-with-online-review-analytics'
//         }
//     })
//     });
    
    
    

//     const { data } = await response.json();

//     if (data && data.postsConnection) {
//     console.log('Posts:', data.postsConnection.edges);
//     return data.postsConnection.edges;
//     } else {
//     console.error('Failed to fetch posts:', data);
//     }
// } catch (error) {
//     console.error('Error fetching posts:', error);
// }
