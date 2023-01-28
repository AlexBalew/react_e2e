import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const hiJackElement = screen.getByText(/hi jack/i);
  const button = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input text/i)
  expect(hiJackElement).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toMatchSnapshot();
});
