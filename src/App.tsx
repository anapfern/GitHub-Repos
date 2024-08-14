import { useLocation, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Home from "./features/Home";
import Footer from "./components/Footer";

export default function App() {
  const [searchParams] = useSearchParams();
  const searchUser = searchParams.get("search") || "";

  const location = useLocation();
  const isFavoritesPage = location.pathname.includes("/favorites");

  return (
    <div>
      <div
        className={
          searchUser === "" && !isFavoritesPage
            ? "flex flex-col-reverse md:flex-col"
            : "flex flex-col h-screen"
        }
      >
        <Header />
        <Home />
      </div>

      <Footer />
    </div>
  );
}
