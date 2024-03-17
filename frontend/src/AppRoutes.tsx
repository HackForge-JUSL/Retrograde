import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/layout";
// import Auth0Provider from "@/auth0/providers/Auth0Provide";
import Auth0Povider from "./auth/Auth0Povider";

// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import { InjectedConnector } from '@web3-react/injected-connector';

// const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

const AppRoutes = () => {

  // const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  // const [account, setAccount] = useState<string | null>(null);

  // useEffect(() => {
  //   const connectWallet = async () => {
  //     try {
  //       const provider = new ethers.providers.Web3Provider(await injectedConnector.getProvider());
  //       setProvider(provider);

  //       const signer = provider.getSigner();
  //       const address = await signer.getAddress();
  //       setAccount(address);
  //     } catch (error) {
  //       console.error('Error connecting to MetaMask:', error);
  //     }
  //   };

  //   connectWallet();
  // }, []);

  return (
    <Routes>
      {/* {account ? (
        <p>Connected Account: {account}</p>
      ) : (
        <button onClick={() => injectedConnector.activate()}>Connect MetaMask</button>
      )} */}
      <Route
        path="/"
        element={
          <Layout showHero>
            <Auth0Povider><HomePage /></Auth0Povider>
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={
          <Layout>
            <span>Profile Page</span>
          </Layout>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
