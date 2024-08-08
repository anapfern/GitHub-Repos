import { FaRegHeart } from "react-icons/fa";
import SearchUsersInput from "./SearchUsersInput";

export default function Header() {
  return (
    <div className="md:border-b border-borderAndLine flex justify-between gap-2">
      <SearchUsersInput />
      <button className="hidden md:flex items-center gap-1 bg-primaryColor text-whiteBackgroundLight text-paragraphMdBold pl-4 pr-4">
        <FaRegHeart size={24} />
        Favoritos
      </button>
    </div>
  );
}
