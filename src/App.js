import logo from './logo.svg';
import './App.css';
import animals from './animals_db.json';
import Jumbotron from './components/Jumbotron';
import CatCard from './components/CatCard';
import DogCard from './components/DogCard';

console.log(animals);

function App() {
  return (
  
    <>
    <Jumbotron />
    {animals.map(animal => animal.type === 'puppy' ? <DogCard type={animal.type} img={animal.img} desc={animal.desc}/> : <CatCard type={animal.type} img={animal.img} desc={animal.desc}/>)}
    </>
  );
}

export default App;
