import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export default function useGetRepositoryByUser(username: string) {
  const fetchRepositories = async ({ pageParam = 1 }) => {
    if (!username) return [];

    const { data } = await api.get(
      `https://api.github.com/users/${username}/repos`,
      {
        params: {
          page: pageParam,
          per_page: 10,
        },
      }
    );

    return data;
  };

  const { data, ...rest } = useInfiniteQuery({
    queryKey: ["repo-data", username],
    queryFn: fetchRepositories,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
    refetchOnWindowFocus: false,
  });

  return { data, ...rest };
}
