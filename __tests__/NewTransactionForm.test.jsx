import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewTransactionForm from '../src/components/NewTransactionForm'
import dayjs from 'dayjs';

 
describe('New Transaction Form', () => {
    let pageElement;
    beforeEach(async()=>{
         pageElement=await render(<NewTransactionForm addTransaction={()=>{}} open={true} handleClose={()=>{}}/>)

    })
   it('Is dialog title visible', async()=>{
    const title=await screen.findByTestId('dialog-title')
    expect(title.textContent).toEqual('Add New Transaction')
   })
   it('Transaction Name text field', async()=>{
    const tranxNameInput=await screen.findByTestId('transaction-name')
    const input=tranxNameInput.querySelector('#transaction')
    const text = 'Salary Credited';
     await userEvent.type(input, text)
     expect(input.value).toEqual(text)
   })
   it('Transaction Amount text field', async()=>{
     const tranxAmtInput=await screen.findByTestId('transaction-amount')
     const input=tranxAmtInput.querySelector('#amount')
     const text = '500';
      await userEvent.type(input, text)
      expect(input.value).toEqual(text)
    })
    
})

