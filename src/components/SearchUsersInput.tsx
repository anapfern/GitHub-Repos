import { FaSearch } from "react-icons/fa";

export default function SearchUsersInput() {
  return (
    <div className="border w-[41.75rem] h-[2.5rem] mt-4 mb-4 ml-5 flex gap-2 rounded items-center text-placeholder">
      <input className="flex-grow ml-2 focus:outline-none" placeholder="Buscar usuário" />
      <FaSearch className="mr-2" />
    </div>
  );
}
