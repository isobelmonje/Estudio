import './App.css';
import SofiaEnterpriseLogo from './imagenes/sofiaenterprise-logo.png';

function App() {
  return (
    <div className='App'>
      <div className='sofiaenterprise-logo-contenedor'>
        <img 
        src={SofiaEnterpriseLogo}
        className='sofiaenterprise-logo'
        alt='Logo de Empresa Miriam' />

      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>


      </div>
    </div>
  );
}

export default App;
