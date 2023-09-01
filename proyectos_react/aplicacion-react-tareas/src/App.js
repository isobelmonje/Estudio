import './App.css';
import sofiaEnterpriseLogo from './imagenes/sofiaenterprise-logo.png';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='empresasofia-logo-contenedor'>
        <img 
        src={sofiaEnterpriseLogo} 
        className='empresasofia-logo' />
      </div>
    </div>
  );
}

export default App;
