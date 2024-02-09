import Clase from './Preloader.module.css'
import Imagen from './asset/logo.png'
const Preloader = () => {
  return (
    <div className={Clase.contenedor}>
     <img className={Clase.imagen} src={Imagen} alt='logo de la tienda' />
     <span className={Clase.loader}></span>
    </div>
  )
}

export default Preloader 