import { Link } from "react-router-dom";
import { UseCart, CartContext } from "../../context/cartContext";
import CartItems from "../CartItems/CartItems";
import Clase from "./Cart.module.css";
import Boton from "../Boton/Boton";
import { FiShoppingBag } from "react-icons/fi";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, totalQuantity, ClearCart, total, setCart } = UseCart(CartContext);

 const limpiarCarrito = ()=>{
  Swal.fire({
    title: "Estas seguro?",
    text: "Quieres eliminar los productos del carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar productos",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Eliminado!",
        text: "Se han eliminado todos los productos",
        icon: "success",
      });
      
      return setCart([]);
    }
  });
 }

  return (
    <div className={Clase.contenedor}>
      {totalQuantity === 0 ? "" : <h1 className={Clase.titulo}>Mis compras</h1>}
      {totalQuantity === 0 ? (
        <div className={Clase.contenedorSecundario}>
          <h2>No hay pructos!</h2>
          <FiShoppingBag className={Clase.icono} />
        </div>
      ) : (
        cart.map((prod) => {
          return <CartItems key={prod.id} prod={prod} callback={ClearCart} />;
        })
      )}
      {totalQuantity === 0 ? (
        ""
      ) : (
        <div>
          <h1>Total ${total}</h1>
          <Link to={"/checkout"}>
            {" "}
            <Boton greeting={"Terminar Compra"} />{" "}
          </Link>
          <button className={Clase.limpiarCarrito} onClick={limpiarCarrito}>limpiar carrito</button>
        </div>
      )}
    </div>
  );
};
export default Cart;
