import { render, screen } from '@testing-library/react';
import App from './App';

test('welcome to softtrade', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to softtrade/i);
  expect(linkElement).toBeInTheDocument();
});
