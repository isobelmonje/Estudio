import React, { useState }from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/TareaFormulario.css';
import { useState } from "react";

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log("Tarea agregada");
    console.log(tarea);
  }
  
  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <tarea 
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;