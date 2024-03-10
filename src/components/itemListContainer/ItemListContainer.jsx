import React from "react"
//import Hook
import { useState, useEffect } from "react"

import { getProducts } from "../../mock/fakeApi"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
//En vez de usar props como variable se le puede pasar directamente el nombre de las "Props" ej: {(greeting, hola)}
//Mirar la Clase de Props porq estoy con Problemas para usarlos
export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()
    console.log(greeting)
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
