import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {colors } from '@mui/material'
import DashboardAnalyticsCard,{handleColor} from '../src/components/DashboardAnalyticsCard'

 
describe('Page', () => {
    let pageElement;
    beforeEach(async()=>{
         pageElement=await render(<DashboardAnalyticsCard color='red' text='1234' title='test title'/>)
    })
   it('color should be Red', async()=>{
    const cardTitle=await screen.findByTestId('title');
    const cardText=await screen.findByTestId('text');
    expect(cardTitle.textContent).toEqual('test title')
    expect(cardText.textContent).toEqual('1234')
    pageElement.rerender(<DashboardAnalyticsCard color='primary' text='6789' title='Rerender test title'/>)
    expect(cardTitle.textContent).toEqual('Rerender test title')
    expect(cardText.textContent).toEqual('6789')
   })
   it('color should be red', async()=>{
    expect(handleColor('red')).toEqual(colors.green[300])
    expect(handleColor('info')).toEqual(colors.lightBlue[300])
    expect(handleColor('primary')).toEqual(colors.red[300])
    expect(handleColor('secondary')).toEqual(colors.brown[300])
   
   })
})

