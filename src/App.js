// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';

function App() {

  const name = "Maria"


  return (
    <div className="App">
      <h1>Alterando pagina</h1>
      <h2>Ola, {name}</h2>

      <HelloWorld />

      <SayMyName nome='Ericlecio' />

      <SayMyName nome={name} />

      <Pessoa
        nome='Ericlecio'
        idade='21'
        profissão='Programador'

      />
      <List />

    <Eventos/>
    <Form />


    </div>
  );
}

export default App;
