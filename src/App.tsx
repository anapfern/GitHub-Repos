import { useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Home from "./features/Home";
import Footer from "./components/Footer";

export default function App() {
  const [searchParams] = useSearchParams();
  const searchUser = searchParams.get("search") || "";

  return (
    <>
      <div
        className={
          searchUser === ""
            ? "flex flex-col-reverse md:flex-col h-screen"
            : "flex flex-col h-screen"
        }
      >
        <Header />
        <Home />
      </div>

      <Footer />
    </>
  );
}
