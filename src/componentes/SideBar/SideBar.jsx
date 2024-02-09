import Clase from "./SideBar.module.css";
import ClaseBtn from "../BotonConEnlace/Boton.module.css";
import { NavLink } from "react-router-dom";
import Imagen from '../Preloader/asset/logo.png'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoHomeOutline,IoHelp } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
function SideBar() {
  return (
    <>
      <nav className={Clase.contenedor}>
       <NavLink to={"/"}> <img className={Clase.img} src={Imagen}/></NavLink>
        <ul className={Clase.contenedorItems}>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/">
            <IoHomeOutline/> Inicio
            </NavLink>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar}><TbCategoryPlus /> Categoria</NavLink>
            <ul className={Clase.subMenu}>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to="/categori/tablet">
                  Tablets
                </NavLink>
              </li>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to="/categori/celular">
                  Celulares
                </NavLink>
              </li>
              <li className={Clase.itemsSubMenu}>
                <NavLink className={ClaseBtn.boton} to="/categori/notebook">
                  Notebooks
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/cart">
            <LiaShoppingBagSolid/> Mis compras
            </NavLink>
          </li>
          <li className={Clase.items}>
            <NavLink className={ClaseBtn.botonSideBar} to="/favoritos">
             < FaRegStar/> Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default SideBar;
