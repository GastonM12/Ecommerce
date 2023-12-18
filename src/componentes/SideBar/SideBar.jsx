import Clase from './SideBar.module.css'
function SideBar(){
    return(
    <>
    <nav className={Clase.contenedor}>
    <ul className={Clase.contenedorItems}>
    <li className={Clase.items}><a className={Clase.enlacesItems} href="#">Inicio</a></li>
      <li className={Clase.items}><a className={Clase.enlacesItems} href="#">Categorias</a></li>
      <li className={Clase.items}><a className={Clase.enlacesItems} href="#">Mis Compras</a></li>
      <li className={Clase.items}><a className={Clase.enlacesItems} href="#">Ayuda</a></li>
    </ul>
    </nav>
    </>
    )
}
export default SideBar;