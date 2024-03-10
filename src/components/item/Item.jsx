import {useNavigate} from "react-router-dom"

{/*useNavigate se usa cuando hay que trabajar con Botones, es un Custom Hook* */}
const Item = ({producto}) => {

    {/*Declaramos el useNavigate*/ }
    const navegar = useNavigate()

    return (
        <div className="cardShop">
            <img className="imgCard" src={producto.imagen} alt={producto.nombre} />

            <div className="ps-2 pt-2">
                <p>{producto.nombre}</p>
            </div>

            <div className="ps-2 priceConf">
                <p>{producto.precio}</p>
            </div>
            <div className="CajaProductosShopShadow ps-2">
                <button onClick={() => navegar(`/item/${producto.id}`)} className="buttonShop">COMPRAR</button>
            </div>
        </div>
    )
}

export default Item