import { FaRegHeart, FaUserAlt } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isFavoritesPage = location.pathname.includes("/favorites");

  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const f = () => {
    setSearchParams({});
    navigate("/favorites");
  };

  return (
    <div className="w-full flex items-center h-16 fixed bottom-0 left-0 right-0 shadow-md md:hidden">
      <button
      onClick={() =>  navigate('/')}
        className={`w-full h-full justify-center flex items-center ${
          !isFavoritesPage ? "bg-primaryColor text-white" : "text-placeholder bg-whiteBackgroundLight"
        }`}
      >
        <FaUserAlt size={24} />
      </button>
      <button
      onClick={f}
        className={`w-full h-full justify-center flex items-center ${
          isFavoritesPage ? "bg-primaryColor text-white" : "text-placeholder bg-whiteBackgroundLight"
        }`}
      >
        <FaRegHeart size={24} />
      </button>
    </div>
  );
}
