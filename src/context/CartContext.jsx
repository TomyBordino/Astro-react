import { createContext,useState } from "react"


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    //Agregar x cantidad de un item al carrito
    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            console.log("Ya existe")
            const nuevoCarrito = cart.map((compra) => {
                if(compra.id === item.id){
                    return{...compra, quantity: compra.quantity+ quantity}
                }else{
                    return compra
                }
            })
            setCart(nuevoCarrito)
        }else{

            setCart([...cart,{...item, quantity}])
        }
        
    }
    //Limpia todo el carrito
    const clear = () =>{
        setCart([])
    }
    //Remueve un item usando el Id para encontrarlo
    const removeItem = (itemId) => {
        setCart(cart.filter((compra) => compra.id !== itemId))
    }
    //Busca un item en el carrito
    const isInCart = (itemId) => {
        return cart.some((compra) => compra.id === itemId)
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, compra) => acc += compra.quantity, 0)
    }

    const cartPriceTotal= () =>{
        return cart.reduce((acc, compra) => acc+= (compra.precio * compra.quantity),0)
    }

    return (
        <CartContext.Provider value={{cart,addItem,clear, removeItem, isInCart, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}