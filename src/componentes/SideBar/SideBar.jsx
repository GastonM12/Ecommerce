import Clase from "./SideBar.module.css";
import ClaseBtn from "../BotonConEnlace/Boton.module.css";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <>
      <nav className={Clase.contenedor}>
        <ul className={Clase.contenedorItems}>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/">
              {" "}
              Inicio
            </NavLink>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar}> Categoria</NavLink>
            <ul className={Clase.subMenu}>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to={"/categori/tablet"}>
                  Tablets
                </NavLink>
              </li>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to={"/categori/celular"}>
                  Celulares
                </NavLink>
              </li>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to={"/categori/notebook"}>
                  Notebooks
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/">
              Nosotros
            </NavLink>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/ayuda">
              {" "}
              Ayuda
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default SideBar;
