import { UseCart, CartContext } from "../../context/cartContext";
import ListFavorite from "../ListFavorite/ListFavorite";
import Clase from "./ItemsContainerFavorite.module.css";
import { FiShoppingBag } from "react-icons/fi";

const ItemContainerFavorite = () => {
  const { fav } = UseCart(CartContext);

  return (
    <div className={Clase.contenedor}>
      {fav.length === 0 ? (
        <div className={Clase.contenedorSecundario}>
          <h2>No hay pructos!</h2>
          <FiShoppingBag className={Clase.icono} />
        </div>
      ) : (
        fav.map((prod) => (
          <ListFavorite
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            img={prod.img}
            precio={prod.precio}
            descipcion={prod.descripcion}
          />
        ))
      )}
    </div>
  );
};

export default ItemContainerFavorite;
