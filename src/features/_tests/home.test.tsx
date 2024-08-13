import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import { vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useGetUserAndRepositories from '../../hooks/useGetRepositoryByUser';

// Mock the useGetUserAndRepositories hook
vi.mock('../../hooks/useGetRepositoryByUser');

const queryClient = new QueryClient();

describe('Home Component', () => {
  beforeEach(() => {
    (useGetUserAndRepositories as jest.Mock).mockReturnValue({
      user: null,
      repositories: null,
      fetchPending: false,
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    });
  });

  it('should render the Instructions component when no searchUser is provided', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Procure pelo Nome ou Nome de Usuário')).toBeInTheDocument();
    expect(screen.getByText('Encontre os repositórios de algum usuário digitando no campo acima')).toBeInTheDocument();
  });

  it('should render the Spinner component when fetchPending is true', () => {
    (useGetUserAndRepositories as jest.Mock).mockReturnValue({
      user: null,
      repositories: null,
      fetchPending: true,
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/?search=testuser']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render the Favorites component when on the favorites page', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/favorites']}>
          <Routes>
            <Route path="/favorites" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Meus favoritos')).toBeInTheDocument();
  });

  it('should render the NotFindUser component when user is not found', () => {
    (useGetUserAndRepositories as jest.Mock).mockReturnValue({
      user: null,
      repositories: null,
      fetchPending: false,
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/?search=testuser']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Nenhum usuário encontrado')).toBeInTheDocument();
    expect(screen.getByText('Verifique se a escrita está correta ou tente novamente')).toBeInTheDocument();

  });

  it('should render the Repositories component when user is found', () => {
    const mockUser = {
      id: 1,
      avatar_url: 'https://avatars.githubusercontent.com/u/62814545?v=4',
      name: 'Ana Fernandes',
      login: 'anapfern',
      bio: 'Frontend Developer',
    };

    const mockRepositories = {
      pages: [
        {
          1: {
            id: 1,
            name: 'Repo 1',
            description: 'Description 1',
            language: 'JavaScript',
            updated_at: '2023-08-12T00:00:00Z',
          },
        },
      ],
    };

    (useGetUserAndRepositories as jest.Mock).mockReturnValue({
      user: mockUser,
      repositories: mockRepositories,
      fetchPending: false,
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/?search=testuser']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Ana Fernandes')).toBeInTheDocument();
    expect(screen.getByText('Repo 1')).toBeInTheDocument();
  });
});
