import './App.css';
import Lista from './Componentes/Lista';

function App() {
  return (
    <div className="App">
      <div className='logo'>
      </div>
      <div className='tareas'>
        <h1>Mis Tareas</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
