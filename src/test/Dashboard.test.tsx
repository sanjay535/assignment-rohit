// Dashboard.test.tsx
import '@testing-library/jest-dom';
import { render,screen } from '@testing-library/react';
import Dashboard from '@/components/Dashboard';

describe('Dashboard Component', () => {
  test('renders Dashboard component correctly', () => {
    const element = render(<Dashboard />);
    
    expect(screen.getByText('Dashboard Summary')).toBeInTheDocument();
    expect(screen.getByText('Transaction Table')).toBeInTheDocument();
  });

});
