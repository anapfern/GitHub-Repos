import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export default function useGetUserAndRepositories(username: string) {
  // Buscar usuário
  const fetchUser = async () => {
    if (!username) return null;

    const { data } = await api.get(`https://api.github.com/users/${username}`);
    return data;
  };

  // Buscar repositórios do usuário com infinity query para uso de scroll infinito
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

  const { data: user, ...userRest } = useQuery({
    queryKey: ["user-data", username],
    queryFn: fetchUser,
    enabled: !!username,
    refetchOnWindowFocus: false,
  });

  const { data: repositories, ...reposRest } = useInfiniteQuery({
    queryKey: ["repo-data", username],
    queryFn: fetchRepositories,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
    enabled: !!user, 
    refetchOnWindowFocus: false,
  });

  return { user, repositories, ...userRest, ...reposRest };
}
