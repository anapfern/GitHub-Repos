import { useSearchParams } from "react-router-dom";
import useGetUserAndRepositories from "../hooks/useGetRepositoryByUser";
import { IRepositoryProps } from "../types";
import Instructions from "../components/Instructions";
import Repositories from "../components/Repositories";
import NotFindUser from "../components/NotFindUser";

export default function Home() {
  const [searchParams] = useSearchParams();
  const searchUser = searchParams.get("search") || "";

  const { user, repositories, fetchPending } =
    useGetUserAndRepositories(searchUser);

  const allPagesRepositories: IRepositoryProps[] =
    repositories?.pages.flatMap((page) => Object.values(page)) || [];

  if (fetchPending) {
    return <div>Carregando...</div>;
  }

  if (searchUser === "") {
    return <Instructions />;
  }

  if (user) {
    return (
      <Repositories user={user} allPagesRepositories={allPagesRepositories} />
    );
  }

  return <NotFindUser />;
}
