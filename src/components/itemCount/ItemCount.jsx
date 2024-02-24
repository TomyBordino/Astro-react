import React from "react"
import { useState } from "react"


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const onAdd = () =>{
        //Completar Funcion
    }

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)  
        }
        
    }

    const restar = () => {
        if(count>0){
            setCount(count - 1)
        }
        
    }
    return (
        <>
            <div>
                <button className="btn btn-dangers" onClick={restar}>-</button>
                <span className="btn">{count}</span>
                <button className="btn btn-success" onClick={sumar}>+</button>
            </div>
            <button className="btn btn-primary">Comprar</button>
        </>
    )
}