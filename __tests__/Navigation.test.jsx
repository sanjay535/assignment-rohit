import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navigation from '../src/components/Navigation'

 
describe('Navigation', () => {
    let pageElement;
    beforeEach(async()=>{
         pageElement=await render(<Navigation/>)

    })
   it('Is dialog title visible', async()=>{
    const menuItems=await screen.findAllByTestId('menu-item')
    expect(menuItems.length).toEqual(2)
   })
   
})

