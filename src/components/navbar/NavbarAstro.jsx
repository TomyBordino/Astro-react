import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { Offcanvas } from 'react-bootstrap';
import logo from '../../imagenes/Logo.png'
import { IoPersonCircleSharp } from "react-icons/io5";

const NavbarAstro = () => {
  return (

    <>
      {['xl',].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-light mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img alt='logo' src={logo} className='headerImg'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center align-items-center flex-grow-1 pe-5">
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <NavDropdown
                    title="Productos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action2">Buzos</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Remeras
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action4">SobreNosotros</Nav.Link>
                  <Nav.Link href="#action5">Contacto</Nav.Link>
                  <Nav.Link href="#action6">Ayuda</Nav.Link>
                </Nav>
                <Form className="d-flex me-5 confRightHeader align-items-center">
                <IoPersonCircleSharp className='iconPosition'/>
                <CartWidget counter={11}/>

                <Form.Control
                type="search"
                placeholder="Search.."
                className="me-2 input"
                aria-label="Search"
              />
              <span className="icon">
                <svg width="20px" height="19px" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                    <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                      stroke="#000" stroke-width="2.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg>
              </span>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    
  )
}

export default NavbarAstro