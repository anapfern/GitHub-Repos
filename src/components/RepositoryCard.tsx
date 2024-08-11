import dayjs from "dayjs";
import { IRepositoryProps } from "../types";
import RepositoryLanguage from "./RepositoryLanguage";
import Favorite from "./Favorite";
import useFavoriteRepositories from "../hooks/useFavoriteRepositories";
import { useEffect, useState } from "react";

export default function RepositoryCard(repository: IRepositoryProps) {

  const { handleAddFavorite, handleRemoveFavorite, favorites } =
    useFavoriteRepositories(repository);

  const [verifyIsFavorite, setVerifyIsFavorite] = useState(undefined);

  useEffect(() => {
    if (favorites) {
      const verify = favorites.some(
        (favorite: IRepositoryProps) => favorite.id === repository.id
      );
      setVerifyIsFavorite(verify);
    }
  }, [favorites, repository]);

  if (verifyIsFavorite === undefined) return null;

  const handleFavorite = (isFavorite: boolean) => {
    if (isFavorite) {
      handleRemoveFavorite.mutate();
    } else {
      handleAddFavorite.mutate();
    }
  };

  const updateOn = dayjs(repository.updated_at).format("DD MMM YYYY");

  return (
    <div className="border-default flex flex-col gap-2 p-3 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-greyNeutral">{repository.name}</h2>
        <Favorite
          isFavorite={verifyIsFavorite}
          action={() => handleFavorite(verifyIsFavorite)}
        />
      </div>
      <p className="text-paragraphMd text-placeholder">
        {repository.description}
      </p>
      <div className="text-paragraphSm text-greyNeutral flex gap-6">
        <RepositoryLanguage language={repository.language} />
        <p>Updated on {updateOn}</p>
      </div>
    </div>
  );
}
