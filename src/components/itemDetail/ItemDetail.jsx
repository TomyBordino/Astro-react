import React from "react";
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ({producto}) => {
    return(
        <div>
            <h2>Detalle de {producto.nombre}</h2>
            <img alt={producto.nombre} src={producto.imagen} />
            <ItemCount stock={producto.stock} />
        </div>
    )
}

export default ItemDetail