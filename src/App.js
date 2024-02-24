import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import solo si se usa Codigo Bootstrap Comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
//---------------------------------------------
import Navbar from './components/navbar/NavbarAstro';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';


function App() {
  const saludo = 'Hola Chicos'
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a la tienda" />
    </div>
  );
}
//npm start (para levantar la pagina)
// CTRL + D Selecciona todo lo que se llama igual
export default App;
