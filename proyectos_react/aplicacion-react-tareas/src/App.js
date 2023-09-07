import './App.css';
import sofiaEnterpriseLogo from './imagenes/sofiaenterprise-logo.png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='empresasofia-logo-contenedor'>
        <img 
        src={sofiaEnterpriseLogo} 
        className='empresasofia-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>  
        <Tarea texto='Aprender React' />
      </div>

      
    </div>
  );
}

export default App;
