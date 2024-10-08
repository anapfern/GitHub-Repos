import { useLocation, useSearchParams } from "react-router-dom";
import useGetUserAndRepositories from "../hooks/useGetRepositoryByUser";
import { IRepositoryProps } from "../types";
import Instructions from "../components/Instructions";
import Repositories from "../components/Repositories";
import NotFindUser from "../components/NotFindUser";
import Favorites from "./Favorites";
import Spinner from "../components/Spinner";

export default function Home() {
  const [searchParams] = useSearchParams();
  const searchUser = searchParams.get("search") || "";

  const location = useLocation();
  const isFavoritesPage = location.pathname.includes("/favorites");

  const {
    user,
    repositories,
    fetchPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetUserAndRepositories(searchUser);

  const allPagesRepositories: IRepositoryProps[] =
    repositories?.pages.flatMap((page) => Object.values(page)) || [];

  if (fetchPending)
    return (
      <div className="mt-12 text-4xl">
        <Spinner />
      </div>
    );

  if (isFavoritesPage) return <Favorites />;

  if (!searchUser) return <Instructions />;

  if (user) {
    return (
      <Repositories
        user={user}
        allPagesRepositories={allPagesRepositories}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    );
  }

  return <NotFindUser username={searchUser} />;
}
