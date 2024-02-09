import Clase from "./Item.module.css";
import { Link } from "react-router-dom";
import { UseCart, CartContext } from "../../context/cartContext";
import { FaRegStar, FaStar } from "react-icons/fa";
const Item = ({ id, img, nombre, precio, descripcion }) => {
  const { addFav, fav } = UseCart(CartContext);

  const agregarFav = () => {
    const objFav = {
      id,
      img,
      nombre,
      precio,
      descripcion,
      favorite: true,
    };

    addFav(objFav);
  };
  const comparador = (id) => {
    return fav.some((prod) => prod.id === id);
  };

  return (
    <div className={Clase.contenedor}>
      <div className={Clase.contenedorSecundario}>
        <img className={Clase.img} src={img} alt={nombre} />
        <h3 className={Clase.nom}>{nombre}</h3>
        <h3 className={Clase.pre}>${precio}</h3>

        <Link className={Clase.boton} to={`/detalle/${id}`}>
          Ver Detalle
        </Link>
      </div>
      {comparador(id) ? (
        <FaStar className={Clase.icono} onClick={agregarFav} />
      ) : (
        <FaRegStar className={Clase.icono} onClick={agregarFav} />
      )}
    </div>
  );
};
export default Item;
