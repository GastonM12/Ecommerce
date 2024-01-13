import Item from "../Item/Item";
const ListItems = ({ productos }) => {
  return (
    <div>
      {productos.map((element) => {
        return (
          <Item
            key={element.id}
            id={element.id}
            nombre={element.nombre}
            img={element.imagen}
            precio={element.precio}
          />
        );
      })}
    </div>
  );
};
export default ListItems;
