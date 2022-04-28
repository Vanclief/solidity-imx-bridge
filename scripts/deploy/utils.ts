/** @format */

export function getSignerAddress(network: string): string {
  switch (network) {
    case "ropsten":
      return "0x5bc3e1D27505973b8cB03039a9E697D01C49047E";
    case "mumbai":
      return "0xa3191D25D341390f04e742C25932dFE02E09d9e4";
  }
  throw Error("No signer address for that network");
}

export function getBridgeAddress(network: string) {
  switch (network) {
    // case "mainnet":
    //   return "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675";
    // case "bsc":
    //   return "0x3c2269811836af69497E5F486A85D7316753cf62";
    // Testnets
    case "ropsten":
      return "0xE70e740104a08fB2A6519c3b95Eed65856C9B05c";
    case "mumbai":
      return "0x587e336A5fD8257397d850B08061b4e87ce27206";
  }
  throw Error("Bridge not deployed to that network");
}
