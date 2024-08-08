import { useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Home from "./features/Home";

export default function App() {
  const [searchParams] = useSearchParams();
  const searchUser = searchParams.get("search") || "";

  return (
    <div
      className={
        searchUser === "" ? "flex flex-col-reverse md:flex-col" : "flex flex-col"
      }
    >
      <Header />
      <Home />
    </div>
  );
}
