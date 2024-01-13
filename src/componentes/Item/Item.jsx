import Clase from './Item.module.css'
import { Link } from 'react-router-dom';

const Item = ({id , img, nombre, precio }) => {
  
  return (
    <div className={Clase.contenedor}>
      <img className={Clase.img} src={img} />
      <h3 className={Clase.nom}>{nombre}</h3>
      <h3 className={Clase.pre}>{precio}</h3>
      <Link className={Clase.boton} to={`/detalle/${id}`}>Ver Detalle</Link>
    </div>
  );
};
export default Item;
