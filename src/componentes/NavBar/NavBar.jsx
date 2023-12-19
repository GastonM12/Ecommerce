import CarritoDeCompras from "../CardWidget/CarritoDeCompras";
import Boton from "../BotonConEnlace/BotonConEnlace";
import Clase from "./NavBar.module.css";
function NavBar() {
  return (
    <>
      <nav className={Clase.contenedorNavBar}>
        <img src="" alt="" />
        <CarritoDeCompras />
        <Boton msj="Iniciar Sesion" clase="boton" />
      </nav>
    </>
  );
}
export default NavBar;
