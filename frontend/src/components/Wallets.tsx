import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletComponent: React.FC = () => {
  const [data, setData] = useState({
    address: '',
    balance: null,
  });

  const btnHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert('Install MetaMask extension!');
    }
  };

  const getBalance = (address: string) => {
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      })
      .then((balance) => {
        setData({
          ...data,
          balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account: string) => {
    setData({
      address: account,
      balance: null,
    });

    getBalance(account);
  };

  return (
    <div>
      <div>
        <p>Address: {data.address}</p>
        <p>Balance: {data.balance}</p>
      </div>
      <button onClick={btnHandler}>Get Account Details</button>
    </div>
  );
};

export default WalletComponent;
