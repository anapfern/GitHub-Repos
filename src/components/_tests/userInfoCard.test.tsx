import { render, screen } from '@testing-library/react';
import UserInfoCard from '../UserInfoCard';
import { IUserProps } from '../../types';

const user: IUserProps = {
  id: 1,
  avatar_url: 'https://avatars.githubusercontent.com/u/62814545?v=4',
  name: 'Ana Fernandes',
  login: 'anapfern',
  bio: 'Frontend Developer',
};

describe('UserInfoCard Component', () => {
  it('should render the UserInfoCard component correctly', () => {
    render(<UserInfoCard {...user} />);

    // Check if the user avatar is rendered
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', user.avatar_url);

    // Check if the user name is rendered
    expect(screen.getByText('Ana Fernandes')).toBeInTheDocument();

    // Check if the user login is rendered
    expect(screen.getByText('@anapfern')).toBeInTheDocument();

    // Check if the user bio is rendered
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });
});
