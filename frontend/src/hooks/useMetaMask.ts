import type { MetaMaskInpageProvider } from "@metamask/providers";
// import metamaskSDK from "@web3-onboard/metamask";

export const useMetaMask = () => {
  const ethereum = global?.window?.ethereum;
  if (!ethereum || !ethereum.isMetaMask) return;
  return ethereum as unknown as MetaMaskInpageProvider;
};