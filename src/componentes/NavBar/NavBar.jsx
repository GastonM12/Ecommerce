import CarritoDeCompras from "../CardWidget/CarritoDeCompras";
import ClaseBtn from "../BotonConEnlace/Boton.module.css";
import Clase from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className={Clase.contenedorNavBar}>
        <img src="" alt="" />
        <CarritoDeCompras />
        <NavLink className={ClaseBtn.botonIniciarSesion}>
          Iniciar Sesion
        </NavLink>
      </nav>
    </>
  );
}
export default NavBar;
