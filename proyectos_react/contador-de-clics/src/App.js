import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  const manejarClic = () => {
    console.ĺog("clic");
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={} />
        
      </div>
      
    </div>
  );
}

export default App;
