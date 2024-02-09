import Item from "../Item/Item";
import Clase from "./ListItems.module.css";

const ListItems = ({ productos }) => {
  return (
    <div className={Clase.contenedor}>
      {productos.map((element) => {
        return (
          <Item
            key={element.id}
            id={element.id}
            nombre={element.nombre}
            img={element.imagen}
            precio={element.precio}
            descripcion={element.descripcion}
          />
        );
      })}
    </div>
  );
};
export default ListItems;
