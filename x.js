const tokenDump = [
  ["0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9", "FTT", "FTX", "Token", "18"],
  [
    "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
    "aleph.im",
    "v2",
    "ALEPH",
    "18",
  ],
  ["0xba100000625a3754423978a60c9317c58a424e3D", "Balancer", "BAL", "18"],
  ["0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55", "BandToken", "BAND", "18"],
  [
    "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    "Binance",
    "USD",
    "BUSD",
    "18",
  ],
  [
    "0x56d811088235F11C8920698a204A5010a788f4b3",
    "bZx",
    "Protocol",
    "Token",
    "BZRX",
    "18",
  ],
  ["0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d", "Celsius", "CEL", "4"],
  ["0xc00e94Cb662C3520282E6f5717214004A7f26888", "Compound", "COMP", "18"],
  ["0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b", "CRO", "CRO", "8"],
  [
    "0xD533a949740bb3306d119CC777fa900bA034cd52",
    "Curve",
    "DAO",
    "Token",
    "CRV",
    "18",
  ],
  ["0xa1d65E8fB6e87b60FECCBc582F7f97804B725521", "DXdao", "DXD", "18"],
  [
    "0x178c820f862B14f316509ec36b13123DA19A6054",
    "Energy",
    "Web",
    "Token",
    "Bridged",
    "EWTB",
    "18",
  ],
  [
    "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    "0x",
    "Protocol",
    "Token",
    "ZRX",
    "18",
  ],
  [
    "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
    "Gemini",
    "dollar",
    "GUSD",
    "2",
  ],
  ["0x4a220E6096B25EADb88358cb44068A3248254675", "Quant", "QNT", "18"],
  [
    "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    "ChainLink",
    "Token",
    "LINK",
    "18",
  ],
  [
    "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    "LoopringCoin",
    "V2",
    "LRC",
    "18",
  ],
  [
    "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    "Matic",
    "Token",
    "MATIC",
    "18",
  ],
  ["0xec67005c4E498Ec7f55E092bd1d35cbC47C91892", "Melon", "Token", "MLN", "18"],
  ["0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2", "Meta", "MTA", "18"],
  [
    "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
    "Ocean",
    "Token",
    "OCEAN",
    "18",
  ],
  ["0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF", "Rarible", "RARI", "18"],
  [
    "0x408e41876cCCDC0F92210600ef50372656052a38",
    "Republic",
    "Token",
    "REN",
    "18",
  ],
  ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D", "renBTC", "renBTC", "8"],
  ["0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2", "renZEC", "renZEC", "8"],
  [
    "0x8762db106B2c2A0bccB3A80d1Ed41273552616E8",
    "Reserve",
    "Rights",
    "RSR",
    "18",
  ],
  ["0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6", "Synth", "sBTC", "sBTC", "18"],
  [
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    "Synthetix",
    "Network",
    "Token",
    "SNX",
    "18",
  ],
  ["0x476c5E26a75bd202a9683ffD34359C0CC15be0fF", "Serum", "SRM", "6"],
  ["0x0Ae055097C6d159879521C384F1D2123D1f195e6", "STAKE", "STAKE", "18"],
  ["0x57Ab1ec28D129707052df4dF418D58a2D46d5f51", "Synth", "sUSD", "sUSD", "18"],
  ["0x6B3595068778DD592e39A122f4f5a5cF09C90fE2", "SushiToken", "SUSHI", "18"],
  ["0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9", "Swipe", "SXP", "18"],
  [
    "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    "UMA",
    "Voting",
    "Token",
    "v1",
    "UMA",
    "18",
  ],
  ["0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa", "TomoChain", "TOMOE", "18"],
  ["0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", "Uniswap", "UNI", "18"],
  [
    "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE",
    "Wrapped",
    "NXM",
    "wNXM",
    "18",
  ],
  ["0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e", "yearn.finance", "YFI", "18"],
  [
    "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
    "EthLend",
    "Token",
    "LEND",
    "18",
  ],
  [
    "0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5",
    "Tellor",
    "Tributes",
    "TRB",
    "18",
  ],
  ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "USD", "Coin", "USDC", "6"],
  ["0x4eCB692B0fEDeCD7B486b4c99044392784877E8C", "Cherry", "CHERRY", "4"],
];

const existingTokens = require("./tokens.json");

const compareString = (a, b) => a.toLowerCase() == b.toLowerCase();
const tokensToUpdate = existingTokens.filter((token) =>
  tokenDump.some((dump) => compareString(dump[0], token.contract))
);

console.log(tokensToUpdate, tokensToUpdate.length);
console.log(tokenDump.length, "is the dump length");

var fs = require("fs");

const files = fs.readdirSync("logos");

const toRename = files.filter((file) => file.includes("Token Image_"));

console.log(toRename, "x");

toRename.forEach((fileName) =>
  fs.renameSync(`logos/${fileName}`, `logos/${fileName.slice(12)}`)
);
