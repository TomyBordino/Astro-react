import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import solo si se usa Codigo Bootstrap Comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
//---------------------------------------------
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavbarAstro';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Bienvenidos a la tienda"/>} />
        <Route path='/categorias/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
//npm start (para levantar la pagina)
// CTRL + D Selecciona todo lo que se llama igual
export default App;
