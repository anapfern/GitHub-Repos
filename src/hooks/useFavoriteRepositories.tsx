import { useCallback, useState } from "react";
import { IRepositoryProps } from "../types";

export default function useFavoriteRepositories() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const isFavorite = useCallback(
    (repo: IRepositoryProps) =>
      favorites.some((favorite: IRepositoryProps) => favorite.id === repo.id),
    [favorites]
  );

  const handleAddFavorite = useCallback(
    (repo: IRepositoryProps) => {
      const newFavorites = [...favorites, repo];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
    [favorites]
  );

  const handleRemoveFavorite = useCallback(
    (repo: IRepositoryProps) => {
      const newFavorites = favorites.filter(
        (favorite: IRepositoryProps) => favorite.id !== repo.id
      );
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
    [favorites]
  );

  return { favorites, isFavorite, handleAddFavorite, handleRemoveFavorite };
}
