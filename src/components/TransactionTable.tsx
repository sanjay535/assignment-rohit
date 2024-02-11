'use client'
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {transactions} from '@/utils/Data';
import { Button } from '@mui/material';
import NewTransactionForm from './NewTransactionForm';

interface TransactionTable {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: string;
  description: string;
}


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width:100},
  { field: 'name', headerName: 'Transaction', width:200},
  { field: 'amount', headerName: 'Amount',width:200 },
  { field: 'date', headerName: 'Date',width:200 },
  { field: 'description', headerName: 'Description',width:300 },
  { field: 'category', headerName: 'Category' },
];

export default function TransactionTable() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [rows, setRows] = React.useState<TransactionTable[]>(transactions);
  
  return (
    <div className='max-w-[90%] mx-auto'>
      <Button onClick={handleClickOpen} variant='outlined' className='bg-[#343434] text-white my-4 hover:text-black'>ADD TRANSACTION</Button>
      <DataGrid rows={rows} columns={columns} />
      <NewTransactionForm open={open} handleClose={handleClose}/>
    </div>
  );
}
