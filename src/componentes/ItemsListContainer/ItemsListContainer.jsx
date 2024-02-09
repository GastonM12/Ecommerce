import Clase from "./ItemsListContainer.module.css";
import ListItems from "../ListItems/ListItems";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getProducts } from "../../service/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import Swal from "sweetalert2";
const ItemsListContainer = (propiedades) => {
  const { categoriId } = useParams();

  const asyncFuncion = () => getProducts(categoriId);

  const {
    data: productos,
    error,
    loading,
  } = useAsync(asyncFuncion, [categoriId]);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrio un error!",
    });
  }
  return (
    <div className={Clase.contenedor}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className={Clase.titulo}>{propiedades.greeting}</h1>
          <ListItems productos={productos} />
        </>
      )}
    </div>
  );
};
export default ItemsListContainer;
