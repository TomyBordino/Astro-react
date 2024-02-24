import React from "react"
//import Hook
import { useState, useEffect } from "react"

//En vez de usar props como variable se le puede pasar directamente el nombre de las "Props" ej: {(greeting, hola)}
//Mirar la Clase de Props porq estoy con Problemas para usarlos
export const ItemListContainer = (props) => {
    console.log(props)
    const {greeting} = props;
    const [saludo, setSaludo] = useState('Hola')

    const cambiarSaludo = () =>{
        setSaludo('Chau')
    }
   
    return (
        <div className="d-flex justify-content-center align-items-center">
            
            <h1 className="fst-italic text-danger-emphasis">{greeting}</h1>
            
            <button className="btn btn-primary" onClick={cambiarSaludo}>
                {saludo}
            </button>

            
        </div>
    )
}
