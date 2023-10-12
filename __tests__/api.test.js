import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Todos from '../app/todos';
import { getTodosTask } from '../app/fetch.api';

jest.mock('../app/fetch.api');

const mockData = [
  {
    id: 1,
    title: 'Test Post 1',
  },
  {
    id: 2,
    title: 'Test Post 2',
  },
];

test('fetches and displays posts', async () => {
    getTodosTask.mockResolvedValue(mockData);

  const { getByText } = render(<Todos />);

  await waitFor(() => {
    expect(getByText('Test Post 1')).toBeInTheDocument();
    expect(getByText('Test Post 2')).toBeInTheDocument();
  });
});
