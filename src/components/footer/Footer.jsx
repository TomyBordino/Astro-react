import './footer.css'
import logo from '../../imagenes/Logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (

        <div className="text-center mt-4">
            <div className="row g-0 pb-3">
                <div className="col-12 col-md-6 col-xl-2">
                    <img className="headerImg" src={logo} alt="Imagen Logo Footer" />
                </div>
                <div class="col-12 col-md-6 col-xl-4 menuFooter">
                    <h3>Menu</h3>

                    <a as={Link}>Sobre Nosotros</a>
                    <a as={Link}>Contacto</a>
                    <a as={Link}>Ayuda</a>
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