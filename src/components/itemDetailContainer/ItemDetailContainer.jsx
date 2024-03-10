import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})
    const {itemId} = useParams()
    
    useEffect(() => {
        getProducts()
        .then((res) => setProducto(res.find((item) => item.id === itemId)))
        .catch((error) => console.log(error))
    },[])

    return(
        <div className="d-flex justify-content-center">
            <ItemDetail producto = {producto}/>
        </div>
    )
}

export default ItemDetailContainer