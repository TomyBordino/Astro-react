import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../../service/firebase"
import { Link } from "react-router-dom"

import "./checkout.css"

const Checkout = () => {

    const [user, setUser] = useState({})
    const [ValidateEmail, setValidateEmail] = useState('')
    const { cart, cartPriceTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
                
            }
        )
    }


    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email) {
            alert("Porfavor Complete todos los campos")
        } else if (user.email !== ValidateEmail) {
            alert("Verifique que sus emails son iguales")
        } else {
            //Objeto de La Orden
            let order = {
                user,
                items: cart,
                total: cartPriceTotal(),
                date: serverTimestamp()
            }
            //Coleccion
            const ventas = collection(db, 'orders')
            //Se agrega el documento
            addDoc(ventas, order)
                .then((res) => {
                    cart.forEach((item) => {
                        const docRef = doc(db, "productos", item.id)
                        getDoc(docRef)
                            .then((dbDoc) => {
                                updateDoc(docRef, { stock: dbDoc.data().stock - item.quantity })
                            })
                    })

                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }


    return (
        <div>
            {orderId !== "" ?
                <div className="d-flex flex-column align-items-center">
                    <h4>Generaste tu Orden !!!!!</h4>
                    <h5>El id de tu Orden es: {orderId}</h5>
                    <Link className="linkHome" to="/">Volver al Inicio</Link>
                </div>
                : <div>
                    <h4 className="text-center">Completa con tus Datos</h4>
                    <form className="form" onSubmit={finalizarCompra}>
                        <p className="heading">Formulario de Contacto</p>
                        <input name="name" className="input2" placeholder="Nombre" type="text" onChange={userData} />
                        <input name="lastname" className="input2" placeholder="Apellido" type="text" onChange={userData} />
                        <input name="email" className="input2" placeholder="Email" type="email" onChange={userData} />
                        <input name="secondEmail" className="input2" placeholder="Repita su Email" type="email" onChange={(e) => setValidateEmail(e.target.value)}/>
                        <input name="phone" className="input2" placeholder="Telefono" type="tel" onChange={userData} />
                        <button className="btn" type="submit">Enviar</button>
                    </form>


                </div>}


        </div>
    )
}

export default Checkout