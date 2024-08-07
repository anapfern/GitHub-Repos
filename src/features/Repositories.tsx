import { useSearchParams } from "react-router-dom";
import UserInfoCard from "../components/UserInfoCard";

import RepositoryCard from "../components/RepositoryCard";
import useGetUserAndRepositories from "../hooks/useGetRepositoryByUser";
import { IRepositoryProps } from "../types";

export default function Repositories() {
  const [searchParams] = useSearchParams();
  const searchUser = searchParams.get("search") || "";

  const { user, repositories } = useGetUserAndRepositories(searchUser);
  const allPagesRepositories: IRepositoryProps[] =
    repositories?.pages.flatMap((alls) => Object.values(alls)) || [];

  return (
    <div className="flex flex-col md:flex-row m-6 gap-8">
      <UserInfoCard {...user} />
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-primaryColor">Repositórios</h1>
        {allPagesRepositories.map((repository) => (
          <RepositoryCard {...repository} key={repository.id} />
        ))}
      </div>
    </div>
  );
}
