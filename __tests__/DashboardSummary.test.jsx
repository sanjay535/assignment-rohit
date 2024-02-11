import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DashboardSummary from '../src/components/DashboardSummary'

 
describe('Page', () => {
    let pageElement;
    beforeEach(async()=>{
         pageElement=await render(<DashboardSummary income={1200} expenses={800} saving={400} transactionCount={20}/>)

    })
   it('All cards have correct values passed as Props on rerendering', async()=>{
    const cardTitle=await screen.findAllByTestId('title');
    const cardText=await screen.findAllByTestId('text');
    expect(cardTitle.length).toEqual(4);
    expect(cardText.length).toEqual(4);
    expect(cardText[0].textContent).toEqual('1200.00')
    expect(cardText[1].textContent).toEqual('800.00')
    expect(cardText[2].textContent).toEqual('20')
    expect(cardText[3].textContent).toEqual('400.00')
    pageElement.rerender(<DashboardSummary income={2000} expenses={900} saving={1100} transactionCount={18}/>)
    expect(cardText[0].textContent).toEqual('2000.00')
    expect(cardText[1].textContent).toEqual('900.00')
    expect(cardText[2].textContent).toEqual('18')
    expect(cardText[3].textContent).toEqual('1100.00')
   })
   
})

