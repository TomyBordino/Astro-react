import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cartView.css"

const CartView= () => {
    const {cart, removeItem, cartPriceTotal, clear} = useContext(CartContext)
    return(
        <div>
            <h2 className="text-center">Tu Carrito</h2>
            <div>
                {cart.map((compra)=> {
                    return(
                        <div className="d-flex justify-content-around align-items-center" key={compra.id}>
                            <img src={compra.imagen} alt={compra.name} style={{width: "8rem"}}/>
                            <span>Cantidad:{compra.name}</span>
                            <span>{compra.quantity}</span>
                            <span>${compra.precio},00</span>
                            <span>Precio Final: ${compra.precio * compra.quantity},00</span>
                            <button className="btn btn-danger" onClick={()=> removeItem(compra.id)}>X</button>
                        </div>
                    )
                })}
            </div>
            <p className="total mt-5 text-center mb-5">Total a Pagar:${cartPriceTotal()},00</p>
            <div className="d-flex justify-content-around">
            <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
            <Link className="btn btn-success" to="/checkout">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default CartView