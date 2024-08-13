import { render, screen } from '@testing-library/react';
import Repositories from '../Repositories';
import { IUserProps, IRepositoryProps } from '../../types';
import { vi } from 'vitest';
import { useInView } from 'react-intersection-observer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock the useInView hook
vi.mock('react-intersection-observer', () => ({
  useInView: vi.fn(),
}));

const queryClient = new QueryClient();

const user: IUserProps = {
  id: 1,
  avatar_url: 'https://avatars.githubusercontent.com/u/62814545?v=4',
  name: 'Ana Fernandes',
  login: 'anapfern',
  bio: 'Frontend Developer',
};

const repositories: IRepositoryProps[] = [
  {
    id: 2,
    name: 'Repo 1',
    description: 'Description 1',
    language: 'JavaScript',
    updated_at: '2024-08-12T00:00:00Z',
  },
  {
    id: 3,
    name: 'Repo 2',
    description: 'Description 2',
    language: 'TypeScript',
    updated_at: '2024-08-11T00:00:00Z',
  },
];

describe('Repositories Component', () => {
  beforeEach(() => {
    (useInView as jest.Mock).mockReturnValue({
      ref: vi.fn(),
      inView: false,
    });
  });

  it('should call fetchNextPage when inView is true and hasNextPage is true', () => {
    const mockFetchNextPage = vi.fn();

    (useInView as jest.Mock).mockReturnValue({
      ref: vi.fn(),
      inView: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Repositories
          user={user}
          allPagesRepositories={repositories}
          hasNextPage={true}
          fetchNextPage={mockFetchNextPage}
          isFetchingNextPage={false}
        />
      </QueryClientProvider>
    );

    expect(mockFetchNextPage).toHaveBeenCalled();
  });

  it('should render the Spinner when isFetchingNextPage is true and hasNextPage is true', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Repositories
          user={user}
          allPagesRepositories={repositories}
          hasNextPage={true}
          fetchNextPage={vi.fn()}
          isFetchingNextPage={true}
        />
      </QueryClientProvider>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});