import React from "react";

function Boton(props) {
    return(
        <div
        className={`boton-contenedor ${esOperador(props.children)}`}>
           {props.children} 
        </div>
    )

}

export default Boton;