import Item from "../item/Item"

const ItemList = ({productos}) => {
    //Recorre los productos mediante Map 
    return (
        <div className="containerAyuda">
            <div className="contentCardShop">
                {productos.map((producto) => <Item key={producto.id} producto={producto}/> )}
            </div>
        </div>
    )
}

export default ItemList