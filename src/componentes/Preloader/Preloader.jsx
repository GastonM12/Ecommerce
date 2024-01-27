import Clase from './Preloader.module.css'
import Imagen from './asset/logo.png'
const Preloader = () => {
  return (
    <div className={Clase.contenedor}>
     <img className={Clase.imagen} src={Imagen} />
     <span className={Clase.loader}></span>
    </div>
  )
}

export default Preloader