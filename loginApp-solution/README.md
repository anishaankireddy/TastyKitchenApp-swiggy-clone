Build Mini Bank application

User Sign up and login After logins show account details and balance Show account summary (transactions) Provide form for transactions Withdraw Deposit Third party transfer

Accounts.csv

name,account,bank,status,balance,created_at,updated_at Ramesh,12345,ICICI,Active,1000,20/04/2023,20/04/2023 Suresh,123457,ICICI,Active,10500,18/04/2023,19/04/2023 Naresh,123456,SBI,Closed,1000,17/04/2023,20/04/2023

Transactions.csv

Id, date, reference_id, account, type, mode, amount, balance 1, 20/04/2023,123, 12345, transfer, credit, 500, 1000 2, 20/04/2023,123, 12346, transfer, debit, 500, 1000 3, 20/04/2023,124, 12345, withdraw, debit, 500, 1000 4, 20/04/2023,125, 12345, deposit, credit, 500, 1000

Implement following functions

Register account If account is not exit add Remove account Just change the status to Closed Transactions Withdraw Input: Date, account_no, amount Output: Add entry in transaction (type: withdraw, mode: debit, update the balance) Deposit Input: Date, account_no, amount Add entry in transaction (type: deposit, mode: credit, update the balance) Transfer Input: Date, from_account_no, to_account_no, amount Add two entries in transaction (use common reference id): Debit money from from account Credit money to account Account Balance

2.  Concatenate Metrics

Input is csv file Always find out columns with starting string Timestamp Metrics can be in any order Fill not available data with None

Input:

Timestamp, metric1, metric2, metric3, metric4 12345, 1, 2, 3, "Yes" 12346, 1, 2, 3, "No" 12347, 1, 2, 3, "Yes" Timestamp, metric1, metric4, metric3 12348, 1, "Yes", 2 12349, 1, "No", 3 12350, 1, "Yes", 4 Timestamp, metric1, metric2, metric3, metric5 12351, 1, 2, 3, 4 12352, 1, 2, 3, 4 12353, 1, 2, 3, 4

Output: Timestamp, metric1, metric2, metric3, metric4,metric5 12345, 1, 2, 3, "Yes", None 12346, 1, 2, 3, "No", None 12347, 1, 2, 3, "Yes", None 12348, 1, None, 2, "Yes", None 12349, 1, None, 3, "No", None 12350, 1, None, 4, "Yes", None 12351, 1, 2, 3, None, 4 12352, 1, 2, 3, None, 4 12353, 1, 2, 3, None, 4
