import { render, screen, fireEvent } from '@testing-library/react';
import RepositoryCard from '../RepositoryCard';
import { IRepositoryProps } from '../../types';
import { vi } from 'vitest';
import dayjs from 'dayjs';
import useFavoriteRepositories from '../../hooks/useFavoriteRepositories'; 
import { UseMutationResult } from '@tanstack/react-query';

// Mock the useFavoriteRepositories hook
vi.mock('../../hooks/useFavoriteRepositories');

const repository: IRepositoryProps = {
  id: 1,
  name: 'Test Repository',
  description: 'This is a test repository',
  language: 'TypeScript',
  updated_at: '2024-08-12T00:00:00Z',
};

describe('RepositoryCard Component', () => {
  it('should render the RepositoryCard component correctly', () => {
    (useFavoriteRepositories as jest.Mock).mockReturnValue({
      handleAddFavorite: { mutate: vi.fn() } as unknown as UseMutationResult<unknown, Error, void, unknown>,
      handleRemoveFavorite: { mutate: vi.fn() } as unknown as UseMutationResult<unknown, Error, void, unknown>,
      favorites: [],
    });

    render(<RepositoryCard {...repository} />);

    // Check if the repository name is rendered
    expect(screen.getByText('Test Repository')).toBeInTheDocument();

    // Check if the repository description is rendered
    expect(screen.getByText('This is a test repository')).toBeInTheDocument();

    // Check if the repository language is rendered
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    // Check if the updated date is rendered correctly
    const updateOn = dayjs(repository.updated_at).format('DD MMM YYYY');
    expect(screen.getByText(`Updated on ${updateOn}`)).toBeInTheDocument();
  });

  it('should call handleAddFavorite when the repository is not a favorite', () => {
    const mockHandleAddFavorite = vi.fn();
    const mockHandleRemoveFavorite = vi.fn();

    (useFavoriteRepositories as jest.Mock).mockReturnValue({
      handleAddFavorite: { mutate: mockHandleAddFavorite } as unknown as UseMutationResult<unknown, Error, void, unknown>,
      handleRemoveFavorite: { mutate: mockHandleRemoveFavorite } as unknown as UseMutationResult<unknown, Error, void, unknown>,
      favorites: [],
    });

    render(<RepositoryCard {...repository} />);

    const favoriteButton = screen.getByRole('button');
    fireEvent.click(favoriteButton);

    expect(mockHandleAddFavorite).toHaveBeenCalled();
  });

  it('should call handleRemoveFavorite when the repository is a favorite', () => {
    const mockHandleAddFavorite = vi.fn();
    const mockHandleRemoveFavorite = vi.fn();

    (useFavoriteRepositories as jest.Mock).mockReturnValue({
      handleAddFavorite: { mutate: mockHandleAddFavorite } as unknown as UseMutationResult<unknown, Error, void, unknown>,
      handleRemoveFavorite: { mutate: mockHandleRemoveFavorite } as unknown as UseMutationResult<unknown, Error, void, unknown>,
      favorites: [repository],
    });

    render(<RepositoryCard {...repository} />);

    const favoriteButton = screen.getByRole('button');
    fireEvent.click(favoriteButton);

    expect(mockHandleRemoveFavorite).toHaveBeenCalled();
  });
});
