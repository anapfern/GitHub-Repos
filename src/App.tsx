import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Instructions from "./components/Instructions";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Instructions />
    </BrowserRouter>
  );
}
