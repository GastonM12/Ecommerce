import CarritoDeCompras from "../CardWidget/CarritoDeCompras";
import ClaseBtn from "../BotonConEnlace/Boton.module.css";
import Clase from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className={Clase.contenedorNavBar}>
        <CarritoDeCompras />
        <Link className={ClaseBtn.botonIniciarSesion}>Iniciar Sesion</Link>
      </nav>
    </>
  );
}
export default NavBar;
