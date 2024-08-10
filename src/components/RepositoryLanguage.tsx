import { FaCircle } from "react-icons/fa";

interface IColorLanguage {
  [key: string]: {
    color: string;
  };
}

export default function RepositoryLanguage({ language }: { language: string }) {

  if (!language) {
    return;
  }

  const colorLanguage: IColorLanguage = {
    JavaScript: {
      color: "#F5DA79",
    },
    HTML: {
      color: "#FF4343",
    },
    CSS: {
      color: "#8d32c6",
    },
    TypeScript: {
      color: "#3276C6",
    },
  };

  return (
    <div className="flex gap-1 items-center w-[4.5rem]">
      <FaCircle color={colorLanguage[language]?.color || "#5d6874"} />
      <p>{language}</p>
    </div>
  );
}
