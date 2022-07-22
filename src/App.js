import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>ALGUNOS TESTIMONIOS</h1>
        <Testimonio
          nombre='MASITA ET'
          pais='ARGENTINA'
          imagen='shawn'
          cargo='Comedora de galletas'
          empresa='EL COLCHON'
          testimonio='Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts.'/>
        <Testimonio
          nombre='PIPIPINA'
          pais='BRASIL'
          imagen='sarah'
          cargo='Roba Camas'
          empresa='El Sillon'
          testimonio='I hear that Nancy is very pretty. She was disgusted he couldnt tell the difference between lemonade and limeade.'/>
        <Testimonio 
          nombre='PULQUI'
          pais='CHILE'
          imagen='emma'
          cargo='VAGONETA'
          empresa='DORMILONA'
          testimonio='She was disgusted he couldnt tell the difference between lemonade and limeade. She learned that water bottles are no longer just to hold liquid, but they'/>
      </div>
    </div>
  );
}

export default App;
