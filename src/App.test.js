import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the word grid', () => {
  render(<App />);
  expect(screen.getByLabelText(/word grid/i)).toBeInTheDocument();
});
