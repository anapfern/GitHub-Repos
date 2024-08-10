import dayjs from "dayjs";
import { IRepositoryProps } from "../types";
import RepositoryLanguage from "./RepositoryLanguage";

export default function RepositoryCard(repository: IRepositoryProps) {
  const updateOn = dayjs(repository.updated_at).format("DD MMM YYYY");

  return (
    <div className="border-default flex flex-col gap-2 p-3">
      <h2 className="text-greyNeutral">{repository.name}</h2>
      <p className="text-paragraphMd text-placeholder">
        {repository.description}
      </p>
      <div className="text-paragraphSm text-greyNeutral flex gap-6">
        <RepositoryLanguage language={repository.language}/>
        <p>Updated on {updateOn}</p>
      </div>
    </div>
  );
}
