
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
   const name = 'Matheus'  
   const newName = name.toUpperCase()
   const nome = "Maria"

   function sum(a, b){
    return a + b
   }

   const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
       <h2>Alterando JSX</h2>
       <p>Olá, {name}</p>
       <p>Olá, {newName}</p>
       <p>Soma: {2 + 2}</p>
       <p>Soma: {sum(1,2)}</p>
       <img src={url} alt="Minha Imagem" />
       < HelloWorld />
       <SayMyName name="Matheus" />
       <SayMyName name="João" />
       <SayMyName name={nome} />
    </div>
  );
}

export default App;
