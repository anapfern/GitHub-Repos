import { FaRegHeart } from "react-icons/fa";
import SearchUsersInput from "./SearchUsersInput";

export default function Header() {
  return (
    <div className="border-b border-borderAndLine hidden md:flex justify-between gap-2">
      <SearchUsersInput />
      <button className="flex items-center gap-1 bg-primaryColor text-whiteBackgroundLight text-paragraphMdBold pl-4 pr-4">
        <FaRegHeart size={24} />
        Favoritos
      </button>
    </div>
  );
}
