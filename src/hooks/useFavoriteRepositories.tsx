import { Toast } from "../components/AlertToast";
import { IRepositoryProps } from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useFavoriteRepositories(repo?: IRepositoryProps) {
  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => JSON.parse(localStorage.getItem("favorites") || "[]"),
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const addFavorite = () => {
    return new Promise((resolve) => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const newFavorites = [...favorites, repo];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      resolve(newFavorites);
    });
  };

  const removeFavorite = () => {
    return new Promise((resolve) => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const newFavorites = favorites.filter(
        (favorite: IRepositoryProps) => favorite.id !== repo?.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      resolve(newFavorites);
    });
  };

  const queryClient = useQueryClient();
  
  const handleAddFavorite = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      Toast.fire({
        icon: "success",
        title: "Repositório adicionado aos favoritos",
      });
    },
    onError: () => {
      Toast.fire({
        icon: "error",
        title: "Erro ao adicionar aos favoritos, tente novamente",
      });
    },
  });

  const handleRemoveFavorite = useMutation({
    mutationFn: removeFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      Toast.fire({
        icon: "success",
        title: "Repositório removido dos favoritos",
      });
    },
    onError: () => {
      Toast.fire({
        icon: "error",
        title: "Erro ao remover dos favoritos, tente novamente",
      });
    },
  });

  return { favorites, handleAddFavorite, handleRemoveFavorite };
}
