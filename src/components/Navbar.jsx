import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Inicio</Link>
      <Link to="/nosotros" style={{ margin: "0 10px" }}>Nosotros</Link>
      <Link to="/servicios" style={{ margin: "0 10px" }}>Servicios</Link>
      <Link to="/contacto" style={{ margin: "0 10px" }}>Contacto</Link>
    </nav>
  );
}

export default Navbar;
