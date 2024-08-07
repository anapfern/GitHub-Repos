import UserInfoCard from "./UserInfoCard";
import RepositoryCard from "./RepositoryCard";
import { IRepositoryProps, IUserProps } from "../types";

interface IRepositoriesProps {
  user: IUserProps;
  allPagesRepositories: IRepositoryProps[];
}

export default function Repositories({
  user,
  allPagesRepositories,
}: IRepositoriesProps) {
  return (
    <div className="flex flex-col md:flex-row m-6 gap-8">
      <UserInfoCard {...user} />
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-primaryColor">Repositórios</h1>
        {allPagesRepositories &&
          allPagesRepositories.map((repository) => (
            <RepositoryCard {...repository} key={repository.id} />
          ))}
      </div>
    </div>
  );
}
