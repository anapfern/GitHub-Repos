import notFindImage from "../assets/undraw_taken.svg";

export default function NotFindUser({ username }: { username: string }) {
  return (
    <div className="text-greyNeutral mt-10 flex flex-col items-center">
      {username && <h1 className="text-primaryColor">"{username}"</h1>}
      <h1>Nenhum usuário encontrado</h1>
      <h5>Verifique se a escrita está correta ou tente novamente</h5>
      <img
        src={notFindImage}
        alt="search people image"
        className="mt-4 hidden md:flex"
      />
    </div>
  );
}
