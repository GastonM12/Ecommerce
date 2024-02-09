import Clase from './CartItems.module.css'
import { MdDeleteOutline } from "react-icons/md";
const CartItems = ({prod,callback}) => {

  return (
  <div className={Clase.contenedor}>
    <img className={Clase.imagen} src={prod.imagen}/>
   <h3>{prod.nombre}</h3>
   <h4 className={Clase.cantidad}>cantidad: {prod.quantity}</h4>
   <h4 className={Clase.precio}> precio por unidad: ${prod.precio}</h4>
   <h3 className={Clase.precio}>Total ${prod.precio * prod.quantity}</h3>
   <button onClick={()=>callback(prod)}><MdDeleteOutline/></button>
  </div>
  )
};
export default CartItems;
