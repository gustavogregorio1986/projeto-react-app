import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Greeting from './components/Greeting';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';

function App() {
  const name = 'Matheus';
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';
  const meusItens = ['React', 'Vue', 'Angular'];

  const [nome, setNome] = useState('');
  

  return (
    <div className="App">
      <Frase />
      <Frase />
      <h2>Alterando JSX</h2>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld />
      <Frase />
      <Frase />
      <SayMyName name="Matheus" />
      <SayMyName name="João" />
      <SayMyName name={nome} />

      <div>
        <input
          type="text"
          placeholder="Digite um nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <Pessoa
        nome="Rodrigo"
        idade="30"
        profissao="Programador"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeMPKp6hVsnXhgRK-wrUAb-YbRqTt28pbAg&s"
      />
      <List />
      <Greeting name="Gustavo" age={39} />
      <h1>Alterando Eventos</h1>
      <Form />
      <h1>Renderização condicional</h1>
      <Condicional />
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <h1>State Lift</h1>
      {/* Componente que captura o nome digitado */}
      <SeuNome setNome={setNome} />
      {/* Componente que exibe a saudação */}
        {nome}
    </div>
  );
}

export default App;