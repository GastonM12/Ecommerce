import { useParams } from "react-router-dom";
import ListDetails from "../ListDetails/ListDetails";
import Loader from "../Loader/Loader";
import { useAsync } from "../../hooks/useAsync";
import { getProductsById } from "../../service/firebase/firestore/products";
import Swal from "sweetalert2";

const ItemsDetailContainer = () => {
  const { productId } = useParams();

  const asyncFuncion = () => getProductsById(productId);

  const { data: detalle, loading, error } = useAsync(asyncFuncion, [productId]);
 if(error){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Ocurrio un error",
  })  
 }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ListDetails
          imagen={detalle.imagen}
          precio={detalle.precio}
          id={detalle.id}
          descripcion={detalle.descripcion}
          nombre={detalle.nombre}
          stock={detalle.stock}
        />
      )}
    </>
  );
};

export default ItemsDetailContainer;
