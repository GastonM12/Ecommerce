import Clase from "./CarritoDeCompras.module.css";
import Imagen from "./asset/carrito.png";
import { UseCart } from "../../context/cartContext";

function CarritoDeCompras() {
  const { totalQuantity } = UseCart();

  return (
    <div className={Clase.contenedorCarritoDeCompra}>
      {totalQuantity === 0 ? (
        <img className={Clase.imagenCarritoDeCompra} src={Imagen} alt="" />
      ) : (
        <>
          <img className={Clase.imagenCarritoDeCompra} src={Imagen} alt="" />
          {totalQuantity}
        </>
      )}
    </div>
  );
}
export default CarritoDeCompras;
