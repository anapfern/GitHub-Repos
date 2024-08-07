import { IUserProps } from "../types";

export default function UserInfoCard(user: IUserProps) {
  if (!user) {
    return null;
  }
  return (
    <div className="border-default md:w-[26.25rem] w-full items-center flex flex-col p-4 text-greyNeutral h-fit">
      <img
        src={user.avatar_url}
        className="w-[12.5rem] h-[12.5rem] rounded-full"
      />
      <h1 className="mt-2 mb-0">{user.name}</h1>
      <p className="text-paragraphMd">@{user.login}</p>
      <p className="text-paragraphMd mt-4">{user.bio}</p>
    </div>
  );
}
