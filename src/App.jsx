import{Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";
import {Producto} from "./components/Producto";
import { Contador } from "./components/Contador";
import { Formulario } from "./components/Formulario";
import { CasoState } from "./components/CasoState";
import { Pokemon } from "./components/Pokemon";
import { Usuarios } from "./components/Users";

export default function App() {

  const productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Celular", precio:800},
    {nombre:"Audifonos", precio: 100 }
  ]
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
  
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((item, index)=>(
          <Producto key={index} nombre={item.nombre} precio={item.precio}/>
        ))}
      </ul>
      <h1>Contador</h1>
      <Contador/>

      <h2>Formulario</h2>
      <Formulario/>

      <h2>Caso State</h2>
      <CasoState/>

      <h2>Poquemones</h2>
      <Pokemon/>

      <h2>U</h2>
      <Usuarios/>
    </>
  );
}
