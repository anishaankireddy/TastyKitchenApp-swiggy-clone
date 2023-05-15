import React, { useState } from 'react';

const ACCOUNTS = [
  { name: 'Ramesh', accountNo: '1234', bank: 'ICICI', status: 'Active', balance: 5000 },
  { name: 'Suresh', accountNo: '5678', bank: 'SBI', status: 'Active', balance: 10000 },
  { name: 'Naresh', accountNo: '1234', bank: 'HDFC', status: 'Closed', balance: 2000 },
];

const TRANSACTIONS = [
  { id: 1, date: '2022-05-23', refId: 'REF1', accountNo: '1234', type: 'Withdraw', mode: 'Debit', amount: 1000, balance: 4000 },
  { id: 2, date: '2022-05-24', refId: 'REF1', accountNo: '5678', type: 'Deposit', mode: 'Credit', amount: 2000, balance: 12000 },
  { id: 3, date: '2022-05-25', refId: 'REF2', accountNo: '1234', type: 'Transfer', mode: 'Debit', amount: 500, balance: 3500 },
  { id: 4, date: '2022-05-26', refId: 'REF2', accountNo: '5678', type: 'Transfer', mode: 'Credit', amount: 500, balance: 12500 },
];

const BankApp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedAccount(null);
    setTransactions([]);
  };

  const handleAccountSelect = (accountNo) => {
    const account = ACCOUNTS.find(a => a.accountNo === accountNo);
    if (account) {
      setSelectedAccount(account);
      setTransactions(TRANSACTIONS.filter(t => t.accountNo === accountNo));
    }
  };

  const handleWithdraw = (amount) => {
    if (selectedAccount && amount <= selectedAccount.balance) {
      const newBalance = selectedAccount.balance - amount;
      const newTransaction = {
        id: TRANSACTIONS.length + 1,
        date: new Date().toISOString().slice(0, 10),
        refId: `REF${TRANSACTIONS.length + 1}`,
        accountNo: selectedAccount.accountNo,
        type: 'Withdraw',
        mode: 'Debit',
        amount: amount,
        balance: newBalance,
      };
      setTransactions([...transactions, newTransaction]);
      setSelectedAccount({...selectedAccount, balance: newBalance});
    }
  };

  const handleDeposit = (amount) => {
    if (selectedAccount) {
      const newBalance = selectedAccount.balance + amount;
      const newTransaction = {
        id: TRANSACTIONS.length + 1,
        date: new Date().toISOString().slice(0, 10),
        refId: `REF${TRANSACTIONS.length + 1}`,
        accountNo: selectedAccount.accountNo,
        type: 'Deposit',
        mode: 'Credit',
        amount: amount,
        balance: newBalance,
      };
      setTransactions([...transactions, newTransaction]);
      setSelectedAccount({...selectedAccount, balance: newBalance});
    }
  };

  const handle
