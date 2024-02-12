import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substring(2, 9);
};

export const NewTransactionForm: React.FC<{
  open: boolean;
  handleClose: () => void;
  addTransaction: (transaction: {
    id: string;
    name: string;
    amount: number;
    date: string | null;
    category: string;
    description: string;
  }) => void;
}> = ({ addTransaction, open, handleClose }) => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [transactionName, setTransactionName] = React.useState<string>('');
  const [transactionAmt, setTransactionAmt] = React.useState<number>(0);
  const [transactionDesc, setTransactionDesc] = React.useState<string>('');
  const [transactionCategory, setTransactionCategory] = React.useState<
    'debit' | 'credit' | any
  >('debit');

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const newTransaction = {
              id: generateUniqueId(),
              name: transactionName,
              amount: transactionAmt,
              date: date?.toISOString() || null,
              category: transactionCategory,
              description: transactionDesc,
            };
            addTransaction(newTransaction);
            console.log(
              transactionName,
              transactionAmt,
              transactionDesc,
              transactionDesc,
              date
            );

            handleClose();
          },
        }}
      >
        <DialogTitle data-testid='dialog-title'>Add New Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enters the details for the transaction
          </DialogContentText>
          <TextField
            data-testid='transaction-name'
            autoFocus
            required
            margin='dense'
            id='transaction'
            name='transaction'
            label='Transaction Name'
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
            type='text'
            fullWidth
          />
          <TextField
             data-testid='transaction-amount'
            autoFocus
            required
            margin='dense'
            id='amount'
            name='amount'
            label='Transaction Amount'
            value={transactionAmt}
            onChange={(e) => setTransactionAmt(Number(e.target.value))}
            type='number'
            fullWidth
          />
          <div className='max-w-[100%] my-2'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                data-testid='transaction-date'
                disableFuture
                value={date}
                onChange={(newValue) => setDate(newValue)}
                className='w-[100%]'
                label='Transaction date'
              />
            </LocalizationProvider>
          </div>

          <TextField
            id='description'
            name='description'
            date-testid='transaction-desc'
            placeholder='Enter transaction description'
            minRows={3}
            maxRows={5}
            value={transactionDesc}
            onChange={(e) => setTransactionDesc(e.target.value)}
            required
            fullWidth
          />
          <div className='my-2'>
            <FormLabel id='demo-row-radio-buttons-group-label'>
              Transaction Category
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
              value={transactionCategory}
              data-testid='transaction-category'
              onChange={(e) => setTransactionCategory(e.target.value)}
            >
              <FormControlLabel
                value='debit'
                required
                control={<Radio />}
                label='Debit'
              />
              <FormControlLabel
                value='credit'
                required
                control={<Radio />}
                label='Credit'
              />
            </RadioGroup>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type='submit'>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default NewTransactionForm;
