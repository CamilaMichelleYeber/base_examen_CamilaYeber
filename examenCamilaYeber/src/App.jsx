import { useState } from 'react'
import './App.css'

function App() {
  
  const [cantante, setCantante] = useState("");
  const [disco, setDisco] = useState("");

  const onChangeCantante = (e) => setCantante(e.target.value);
  const onChangeDisco = (e) => setDisco(e.target.value);

  
 const onSubmitForm = (e) => {
  e.preventDefault();
  };

 
  const validarCantante = (cantante) => {
  
  const conEspacio = cantate.trim();
  if (conEspacio.length > 3) {
  return true;
  } else {
  return false;
  }
  };

 
  const validarDisco = (disco) => {
  const conEspacio = disco.trim();
 

  if (conEspacio.length > 6 ) {
  return true;
  } else {
  return false;
  }
  };

  /*const onSubmitForm = (e) => {
  e.preventDefault();
    
   const isCantateValido = validarCantante(cantate);
   const isDiscoValido = validarDisco(disco);
    
  
   if (!isCantateValido || !isDiscoValido) {
   alert("Alguno de los datos ingresados no son correctos");
  } else {
   }
   };
  */

  return (
    <>
      <div className="App">
        <h3>Contanos sobre tu cantante favorito!</h3>
        
        <form onSubmit={onSubmitForm}>
          
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={cantante}
            onChange={onChangeCantate}
          />
          <input
            type="text"
            placeholder="Disco"
            value={disco}
            onChange={onChangeDisco}
          />
         
          <button type="submit">Enviar</button>
        </form>
      </div>

    </>
  )
}

export default App
