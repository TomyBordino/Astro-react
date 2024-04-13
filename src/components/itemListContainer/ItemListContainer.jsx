import React from "react"
//import Hook
import { useState, useEffect } from "react"

import { getProducts } from "../../mock/fakeApi"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../service/firebase"
//En vez de usar props como variable se le puede pasar directamente el nombre de las "Props" ej: {(greeting, hola)}

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()
    
    /*
        useEffect(() => {
      
            getProducts()
                .then((res) => {
                    if (categoriaId) {
                        setProductos(res.filter((prod) => prod.categoria === categoriaId))
                    } else {
                        setProductos(res)
                    }
                })
                .catch((error) => console.log(error, 'Todo Mal'))
        }, [categoriaId])
    */
    //FIREBASE

    useEffect(() => {
        const productsCollection = categoriaId ? query(collection(db,"productos"), where("categoria", "==", categoriaId)) :collection(db, "productos")
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductos(list)
            })
            .catch((error) => console.log(error, "Todo Mal"))

    }, [categoriaId])


    return (
        <div className="containerAyuda align-items-center">

            <div>
                
                {
                    categoriaId ? <h1 className="text-center">{categoriaId}</h1>
                        : <h1 className="text-center">{greeting}</h1>
                }


                <ItemList productos={productos} />
            </div>


        </div>
    )
}
