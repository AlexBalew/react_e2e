import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const hiJackElement = screen.getByText(/hi jack/i);
  const button = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input text/i)
  const helloJackElement = screen.queryByText(/hello/i)
  expect(hiJackElement).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toMatchSnapshot();
  expect(helloJackElement).toBeNull();
});

test.skip('renders learn react link async', async() => {
  render(<App />);
  const helloWorldElem = await screen.findByText(/data/i)
  expect(helloWorldElem).toBeInTheDocument();
  expect(helloWorldElem).toHaveStyle({color: 'blue'});
});

test.skip('button test', () => {
  render(<App />);
  const btn = screen.getByTestId('toggle-btn');
  expect(screen.queryByTestId('toggle-elem')).toBeNull();
  fireEvent.click(btn)
  expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
  fireEvent.click(btn)
  expect(screen.queryByTestId('toggle-elem')).toBeNull();
})

test.skip('input test', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/input text/i)
  expect(screen.queryByTestId('value-elem')).toContainHTML('');
  userEvent.type(input, '4848')
  expect(screen.queryByTestId('value-elem')).toContainHTML('4848');
})
