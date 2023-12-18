import CarritoDeCompras from "../CarritoDeCompras/CarritoDeCompras";
import Boton from "../Boton/Boton";
import Clase from "./NavBar.module.css"
function NavBar(){
    return(
    <>
    <nav className={Clase.contenedorNavBar}>
        <img src="" alt="" />
       <CarritoDeCompras/>
       <Boton msj="Iniciar Sesion" />
    </nav>
    </>
)
}
export default NavBar;