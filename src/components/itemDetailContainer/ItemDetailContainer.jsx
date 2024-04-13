import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import logo from '../../imagenes/Logo.png'
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../service/firebase"

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})
    const {itemId} = useParams()
    const [cargando, setCargando] = useState(false)
    
    /*
    useEffect(() => {
        setCargando(true)
        getProducts()
        .then((res) => setProducto(res.find((item) => item.id === itemId)))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
    },[itemId])
*/

    //Firebase

    useEffect(()=>{
        setCargando(true)
        //coleccion y proyecto
        const collectionProd = collection(db,"productos")
        //crear referencia doc
        const referenciaDoc = doc(collectionProd, itemId)
        //Version resumida const referenciaDoc=doc(dv,"productos",itemId)

        //Traer el doc
        getDoc(referenciaDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))

    },[itemId])

    return(
        <div className="d-flex justify-content-center">
            {cargando ? <img src={logo} alt="Logo Loader" /> :<ItemDetail producto = {producto}/>}
        </div>
    )
}

export default ItemDetailContainer