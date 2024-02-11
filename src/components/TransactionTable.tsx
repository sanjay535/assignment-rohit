'use client';
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { transactions } from '@/utils/Data';
import { Button } from '@mui/material';
import NewTransactionForm from './NewTransactionForm';

interface TransactionTable {
  id: string;
  name: string;
  amount: number;
  date: string | null;
  category: string;
  description: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Transaction', width: 200 },
  { field: 'amount', headerName: 'Amount', width: 200 },
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'category', headerName: 'Category' },
];

const TransactionTable:React.FC<{
  setTotalIncome:(income:number)=>void,
  setTotalExpenses:(expenses:number)=>void,
  setTotalSaving:(saving:number)=>void,
  setTotalTransaction:(count:number)=>void,
}>=({
  setTotalIncome,
  setTotalExpenses,
  setTotalSaving,
  setTotalTransaction,
}): JSX.Element=> {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState<TransactionTable[]>(transactions);
  React.useEffect(() => {
    const ttlIncome = rows.reduce((acc, item) => {
      acc += item.category === 'credit' ? item.amount : 0;
      return acc;
    }, 0);
    const ttlExpense = rows.reduce((acc, item) => {
      acc += item.category === 'debit' ? item.amount : 0;
      return acc;
    }, 0);
    const ttlSaving = ttlIncome - ttlExpense;
    const ttlTranx = rows.length;
    setTotalIncome(ttlIncome);
    setTotalExpenses(ttlExpense);
    setTotalSaving(ttlSaving)
    setTotalTransaction(ttlTranx)
  }, [rows.length, rows]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTransaction = (transaction: TransactionTable) => {
    console.log('transaction', transaction);
    setRows([transaction, ...rows]);
  };

  return (
    <div className='max-w-[90%] mx-auto'>
      <Button
        onClick={handleClickOpen}
        variant='outlined'
        className='bg-[#343434] text-white my-4 hover:text-black'
      >
        ADD TRANSACTION
      </Button>
      <DataGrid rows={rows} columns={columns} />
      <NewTransactionForm
        addTransaction={addTransaction}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default TransactionTable;