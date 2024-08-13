import UserInfoCard from "./UserInfoCard";
import RepositoryCard from "./RepositoryCard";
import { IRepositoryProps, IUserProps } from "../types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner";

interface IRepositoriesProps {
  user: IUserProps;
  allPagesRepositories: IRepositoryProps[];
  hasNextPage: boolean;
  fetchNextPage: VoidFunction;
  isFetchingNextPage: boolean;
}

export default function Repositories({
  user,
  allPagesRepositories,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: IRepositoriesProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && fetchNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="flex flex-col md:flex-row m-6 gap-8 overflow-y-auto md:overflow-y-hidden">
      <UserInfoCard {...user} />
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-primaryColor">Repositórios</h1>
        {allPagesRepositories && (
          <div className="md:overflow-y-auto gap-4 flex flex-col">
            {allPagesRepositories.map((repository) => (
              <RepositoryCard {...repository} key={repository.id} />
            ))}
            <div ref={ref}></div>
            {isFetchingNextPage && hasNextPage && <Spinner />}
          </div>
        )}
      </div>
    </div>
  );
}
