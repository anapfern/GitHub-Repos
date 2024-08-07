export interface IRepositoryProps {
  id: number;
  name: string;
  description: string;
  language: string;
  updated_at: string;
}

export interface IUserProps {
  id: number;
  avatar_url: string;
  bio: string;
  login: string;
  name: string;
}