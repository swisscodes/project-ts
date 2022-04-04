import React from 'react';
import { render, screen } from '@testing-library/react';
import EntryPoint from './EntryPoint';

test('renders learn react link', () => {
  render(<EntryPoint />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
