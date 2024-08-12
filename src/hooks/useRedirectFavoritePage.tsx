import { useNavigate, useSearchParams } from "react-router-dom";

export default function useRedirectFavoritePage() {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const redirectFavoritePage = () => {
    setSearchParams({});
    navigate("/favorites");
  };

  return { redirectFavoritePage };
}
