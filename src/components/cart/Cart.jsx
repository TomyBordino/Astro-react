import React, { useContext } from "react";
import CartView from '../cartView/CartView'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () =>{
    const {cart} = useContext(CartContext)
    return(
        <div>
           {!cart.length 
           ? <div className="text-center">
            <h2>Tu Carrito se encuentra Vacio</h2>
            <h3>Te invitamos a Ver nuestros Productos</h3>
            <Link className="btn btn-success" to='/'>Ir a Comprar</Link>
            </div> 
           : <CartView/>}
        </div>
    )
}

export default Cart