import './footer.css'
import logo from '../../imagenes/Logo.png'
import { Link } from "react-router-dom"

//<link href="/sobreNosotros">Sobre Nosotros</link>
const Footer = () => {
    return (

        <div className="text-center mt-4">
            <div className="row g-0 pb-3">
                <div className="col-12 col-md-6 col-xl-2">
                    <img className="headerImg" src={logo} alt="Imagen Logo Footer" />
                </div>
                <div class="col-12 col-md-6 col-xl-4 menuFooter">
                    <h3>Menu</h3>
                    
                    <Link className='link' to="/sobreNosotros">Sobre Nosotros</Link>
                    <Link className='link' to="/contacto">Contacto</Link>
                    <Link className='link' to="/ayuda">Ayuda</Link>

                </div>
                <div className="col-12 col-md-6 col-xl-3 menuFooter">
                    <h3>Redes Sociales</h3>
                    <a href="https://www.instagram.com/astro.argg/"><i class="bi bi-instagram iconRedes"></i></a>
                </div>
                <div className="col-12 col-md-6 col-xl-3 menuFooter">
                    <h3>Contacto</h3>
                    <i className="bi bi-whatsapp">+123123123</i>

                    <i className="bi bi-geo-alt-fill">Jose Juares 123</i>
                </div>
            </div>
        </div>

    )
}

export default Footer