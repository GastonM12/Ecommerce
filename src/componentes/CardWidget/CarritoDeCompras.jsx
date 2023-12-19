import Clase from "./CarritoDeCompras.module.css";
import Imagen from "./asset/carrito.png";
function CarritoDeCompras() {
  return (
    <div className={Clase.contenedorCarritoDeCompra}>
      <img className={Clase.imagenCarritoDeCompra} src={Imagen} alt="" />
      <p className={Clase.carritoDeCompraCantidad}>0</p>
    </div>
  );
}
export default CarritoDeCompras;
