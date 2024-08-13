import { render, screen } from '@testing-library/react';
import Favorites from '../Favorites';
import { vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useFavoriteRepositories from '../../hooks/useFavoriteRepositories';
import { IRepositoryProps } from '../../types';

// Mock the useFavoriteRepositories hook
vi.mock('../../hooks/useFavoriteRepositories');

const queryClient = new QueryClient();

const mockFavorites: IRepositoryProps[] = [
  {
    id: 1,
    name: 'Repo 1',
    description: 'Description 1',
    language: 'JavaScript',
    updated_at: '2024-08-12T00:00:00Z',
  },
  {
    id: 2,
    name: 'Repo 2',
    description: 'Description 2',
    language: 'TypeScript',
    updated_at: '2024-08-11T00:00:00Z',
  },
];

describe('Favorites Component', () => {
  beforeEach(() => {
    (useFavoriteRepositories as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
    });
  });

  it('should render the Favorites component correctly with favorite repositories', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Favorites />
      </QueryClientProvider>
    );

    // Check if the title is rendered
    expect(screen.getByText('Meus favoritos')).toBeInTheDocument();

    // Check if the favorite repositories are rendered
    expect(screen.getByText('Repo 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Repo 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should render the message when there are no favorite repositories', () => {
    (useFavoriteRepositories as jest.Mock).mockReturnValue({
      favorites: [],
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Favorites />
      </QueryClientProvider>
    );

    // Check if the message is rendered
    expect(screen.getByText('Você ainda não possui repositórios favoritados.')).toBeInTheDocument();
  });
});
