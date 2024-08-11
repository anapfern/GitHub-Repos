import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface IFavoriteProps {
  isFavorite: boolean;
  action: VoidFunction;
}

export default function Favorite({ isFavorite, action }: IFavoriteProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleChangeFavorite = () => {
    setFavorite(!favorite);
    action()
  };

  return (
    <>
      {favorite ? (
        <button
          className="border border-primaryColor rounded-full p-2 text-primaryColor cursor-pointer"
          onClick={handleChangeFavorite}
        >
          <FaHeart />
        </button>
      ) : (
        <button
          className="rounded-full p-2 text-placeholder bg-whiteBackgroundMatte cursor-pointer"
          onClick={handleChangeFavorite}
        >
          <FaRegHeart />
        </button>
      )}
    </>
  );
}
