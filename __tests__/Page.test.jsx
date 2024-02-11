import '@testing-library/jest-dom'
import Link from 'next/link'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page';
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const button = screen.getByText('ADD TRANSACTION')
 
    expect(button).toBeInTheDocument()
  })
})

