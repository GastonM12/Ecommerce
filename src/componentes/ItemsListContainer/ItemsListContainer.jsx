import Clase from "./ItemsListContainer.module.css";
const ItemsListContainer = (propiedades) => {
  return (
    <>
      <h1 className={Clase.titulo}>{propiedades.greeting}</h1>
    </>
  );
};
export default ItemsListContainer;
