import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Page from '../src/app/page';
 
describe('Page', () => {
    let pageElement;
    beforeEach(async()=>{
         pageElement=await render(<Page />)
    })
  it('renders a button', () => {
    const button = screen.getByText('ADD TRANSACTION')
    expect(button).toBeInTheDocument()
  })
  it('renders 4 cards in ', () => {
    const card1 = screen.getByText('Total Income')
    const card2 = screen.getByText('Total Expenses')
    const card3 = screen.getByText('Total Transactions')
    const card4 = screen.getByText('Saving')

    expect(card1).toBeInTheDocument()
    expect(card2).toBeInTheDocument()
    expect(card3).toBeInTheDocument()
    expect(card4).toBeInTheDocument()
  })
  it('tables header ', async() => {
    const headers =await pageElement.findAllByRole('columnheader')
    expect(headers.length).toEqual(3)
    
  })
})

