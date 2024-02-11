import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Dashboard from '../src/components/Dashboard'
 
describe('Page', () => {
    let pageElement;
    beforeEach(async()=>{
         pageElement=await render(<Dashboard />
           )
    })
  it('renders a Income Card in Dashboard', async() => {
    
    const ttlIncomeCard =await screen.findByTestId('Total Income')
   expect( ttlIncomeCard.querySelector('.MuiTypography-subtitle1').textContent).toEqual('Total Income')
   expect( ttlIncomeCard.querySelector('.MuiTypography-body1').textContent).toEqual("4550.00")
  })
  it('renders a Expenses Card in Dashboard', async() => {
    
    const ttlIncomeCard =await screen.findByTestId('Total Expenses')
   expect( ttlIncomeCard.querySelector('.MuiTypography-subtitle1').textContent).toEqual('Total Expenses')
   expect( ttlIncomeCard.querySelector('.MuiTypography-body1').textContent).toEqual("545.40")
  })
  it('renders a Total Transaction Card in Dashboard', async() => {
    
    const ttlIncomeCard =await screen.findByTestId('Total Transactions')
   expect( ttlIncomeCard.querySelector('.MuiTypography-subtitle1').textContent).toEqual('Total Transactions')
   expect( ttlIncomeCard.querySelector('.MuiTypography-body1').textContent).toEqual("15")
  })

  it('renders a saving Card in Dashboard', async() => {
    
    const ttlIncomeCard =await screen.findByTestId('Saving')
   expect( ttlIncomeCard.querySelector('.MuiTypography-subtitle1').textContent).toEqual('Saving')
   expect( ttlIncomeCard.querySelector('.MuiTypography-body1').textContent).toEqual("4004.60")
  })
  
})

