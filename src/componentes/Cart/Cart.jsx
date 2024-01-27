import { Link } from "react-router-dom";
import { UseCart, CartContext } from "../../context/cartContext";
import CartItems from "../CartItems/CartItems";
import Clase from "./Cart.module.css";
import Boton from '../Boton/Boton'
const Cart = () => {
  const { cart, totalQuantity, ClearCart, total } = UseCart(CartContext);
  return (
    <>
      <h1 className={Clase.titulo}>Mis compras</h1>
      {totalQuantity === 0 ? (
        <h2>no hay pructos</h2>
      ) : (
        cart.map((prod) => {
          return <CartItems key={prod.id} prod={prod} callback={ClearCart} />;
        })
      )}
      {totalQuantity === 0 ? (
        ""
      ) : (
        <div>
          <h1>Total {total}</h1>
          <Link to={"/checkout"}> <Boton greeting={"Terminar Compra"}/> </Link>
        </div>
      )}
    </>
  );
};
export default Cart;
