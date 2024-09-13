// src/__tests__/StatusMessage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import StatusMessage from '../StatusMessage/StatusMessage';

test('Mostrar un mensaje cuando isLoading es true', () => {
  const { getByText } = render(<StatusMessage isLoading={true} />);
  expect(getByText('Loading...')).toBeInTheDocument();
});

test('Mostrar un mensaje cuando isLoading es false', () => {
  const { getByText } = render(<StatusMessage isLoading={false} />);
  expect(getByText('Data loaded!')).toBeInTheDocument();
});

test('Mostrar un mensaje cuando isLoading no existe', () => {
    const { getByText } = render(<StatusMessage />);
    expect(getByText('Data loaded!')).toBeInTheDocument();
  });