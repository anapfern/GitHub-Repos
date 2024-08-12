import { ImSpinner2 } from "react-icons/im";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <ImSpinner2 className="animate-spin text-primaryColor" />
    </div>
  );
}
