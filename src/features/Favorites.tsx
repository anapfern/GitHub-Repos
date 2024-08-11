import RepositoryCard from "../components/RepositoryCard";
import useFavoriteRepositories from "../hooks/useFavoriteRepositories";
import { IRepositoryProps } from "../types";

export default function Favorites() {

  const { favorites } = useFavoriteRepositories();

  return (
    <div className="flex flex-col items-center gap-2 w-full md:pl-60 md:pr-60 pl-4 pr-4">
      <h1 className="text-primaryColor mt-4 mb-3">Meus favoritos</h1>
      {favorites.length ? favorites.map((favorite: IRepositoryProps) => (
        <RepositoryCard {...favorite} key={favorite.id} />
      )) : <p className="text-placeholder">Você ainda não possui repositórios favoritados.</p>}
    </div>
  );
}
