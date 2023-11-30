// import { Link } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { createBrowserRouter } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import  Home  from '../pages/Home.jsx';
import Libros  from '../pages/Libros.jsx';
import Autores  from '../pages/Autores.jsx';
import Tiendas from '../pages/Tiendas';
import Contacto from '../pages/Contacto';


export function MyRoutes(){
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Libros" element={<Libros />} />
    <Route path="/Autores" element={<Autores />} />
    <Route path="/Tiendas" element={<Tiendas/>} />
    <Route path="/Contacto" element={<Contacto/>} />
    {/* <Route path="/estadisticas" element={<Estadisticas />} />
    <Route path="/diagramas" element={<Diagramas />} />
    <Route path="/reportes" element={<Reportes />} /> */}
  </Routes>
  )
}


