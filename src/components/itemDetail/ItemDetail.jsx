import React, { useContext, useState,} from "react";
import {useNavigate} from "react-router-dom"
import ItemCount from "../itemCount/ItemCount"
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({producto}) => {
    const [compra,setCompra] = useState(false)
    //Llamo al Hook y le digo que contexto quiero usar
    const {addItem} = useContext(CartContext)
    const navegar = useNavigate()

    //FALTA COMPLETAR CON CLASE EVENTOS ULTIMOS 40/30 MIN
    const onAdd = (cantidad) =>{
        addItem(producto,cantidad)
        setCompra(true)
    }
    //Agregar en el Boton IR AL CARRITO la ruta para ir al carrito
    return(
        <div>
            <h2>Detalle de {producto.nombre}</h2>
            <img alt={producto.nombre} src={producto.imagen} />
            {producto.stock < 5 && <p>Quedan Pocas Unidades !!!</p>}
            
            {compra ? <button onClick={() => navegar(`/cart`)} className="btn btn-success">IR al carrito</button> :<ItemCount stock={producto.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail