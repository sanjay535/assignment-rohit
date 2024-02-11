'use client';
import * as React from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { transactions } from '@/utils/Data';
import { Box, Button, colors } from '@mui/material';
import NewTransactionForm from './NewTransactionForm';
import dayjs from 'dayjs';

interface TransactionTable {
  id: string;
  name: string;
  amount: number;
  date: string | null;
  category: string;
  description: string;
}
const cellWidth=1400/5

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Transaction',
    width: cellWidth,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: cellWidth,
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return '';
      }
      return params.value.toFixed(2);
    },
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'date',
    headerName: 'Date',
    width: cellWidth,
    valueFormatter: (params: GridValueFormatterParams<string>) => {
      if (params.value == null) {
        return '';
      }
      return dayjs(params.value).format('DD/MM/YYYY');
    },
    headerClassName: 'super-app-theme--header',
  },
  { field: 'description', headerName: 'Description', width: cellWidth,headerClassName: 'super-app-theme--header', },
  {
    field: 'category',
    headerName: 'Category',
    valueFormatter: (params: GridValueFormatterParams<string>) => {
      if (params.value == null) {
        return '';
      }
      return params.value.toUpperCase();
    },
    width:cellWidth,
    headerClassName: 'super-app-theme--header',
  },
];

const TransactionTable: React.FC<{
  setTotalIncome: (income: number) => void;
  setTotalExpenses: (expenses: number) => void;
  setTotalSaving: (saving: number) => void;
  setTotalTransaction: (count: number) => void;
}> = ({
  setTotalIncome,
  setTotalExpenses,
  setTotalSaving,
  setTotalTransaction,
}): JSX.Element => {
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
    setTotalSaving(ttlSaving);
    setTotalTransaction(ttlTranx);
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
      <Box
      sx={{
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#A7947A',
          color:colors.common.white
        },
        '& .super-app-theme--rowDebit':{
          background:colors.red[300],
          color:colors.common.white,
          '&:hover': {
            backgroundColor:colors.red[400],
            color:colors.common.black,
          },
        },
        '& .super-app-theme--rowCredit':{
          background:colors.green[300],
          color:colors.common.white,
          '&:hover': {
            backgroundColor:colors.green[400],
            color:colors.common.black,
          },
       }
      }}
    >
      <DataGrid getRowClassName={(params) => `super-app-theme--${params.row.category==='debit'?'rowDebit':'rowCredit'}`} rows={rows} columns={columns} />
      </Box>
      <NewTransactionForm
        addTransaction={addTransaction}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default TransactionTable;
