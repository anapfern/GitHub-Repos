import instructionsImage from '../assets/undraw_people_search.svg'

export default function Instructions() {
  return <div className="text-greyNeutral mt-10 flex flex-col items-center p-4">
    <h1>Procure pelo Nome ou Nome de Usuário</h1>
    <h5>Encontre os repositórios de algum usuário digitando no campo acima</h5>
    <img src={instructionsImage} alt="search people image" className='mt-4 hidden md:flex'/>
  </div>;
}
