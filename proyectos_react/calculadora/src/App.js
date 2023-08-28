import './App.css';
import SofiaEnterpriseLogo from './imagenes/sofiaenterprise-logo.png';
import Boton from './componentes/Boton';
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
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>


      </div>
    </div>
  );
}

export default App;