import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, useSearchParams } from 'react-router-dom';
import SearchUsersInput from '../SearchUsersInput';
import { vi } from 'vitest';

// Mock the useDebounce hook
vi.mock('../../hooks/useDebounce', () => ({
  default: (value: string) => value,
}));

describe('SearchUsersInput Component', () => {
  it('should render the SearchUsersInput component', () => {
    render(
      <MemoryRouter>
        <SearchUsersInput />
      </MemoryRouter>
    );

    // Check if the input is rendered
    const input = screen.getByPlaceholderText('Buscar usuário');
    expect(input).toBeInTheDocument();

    // Check if the search icon is rendered
    const icon = screen.getByTestId('search-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should update the query state when input value changes', () => {
    render(
      <MemoryRouter>
        <SearchUsersInput />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Buscar usuário');
    fireEvent.change(input, { target: { value: 'test user' } });

    expect(input).toHaveValue('test user');
  });

  it('should update the searchParams when debouncedQuery changes', async () => {
    const TestComponent = () => {
      const [searchParams] = useSearchParams();
      return <div data-testid="search-params">{searchParams.toString()}</div>;
    };

    render(
      <MemoryRouter>
        <SearchUsersInput />
        <TestComponent />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Buscar usuário');
    fireEvent.change(input, { target: { value: 'test user' } });

    // Wait for the searchParams to update
    await waitFor(() => {
      expect(screen.getByTestId('search-params')).toHaveTextContent('search=test+user');
    });
  });
});
