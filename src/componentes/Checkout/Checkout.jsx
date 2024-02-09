import Clase from "./Checkout.module.css";
import DateForm from "../DateForm/DateForm";
import { useState } from "react";
import { UseCart, CartContext } from "../../context/cartContext";
import { createOrder } from "../../service/firebase/firestore/createOrder";
import Swal from "sweetalert2";
import PurchaseInformation from "../PurchaseInformation/PurchaseInformation";

const Checkout = () => {
  const { cart, total, setCart } = UseCart(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [userData, setUserData] = useState({});

  const dateUser = (data) => {
    setUserData(data);
    createOrder(data, cart, total)
      .then((id) => setOrderId(id), setCart([]))
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error",
        })
      );
  };

  return (
    <div className={Clase.contenedor}>
      <div>
        {orderId ? (
          <PurchaseInformation data={userData} id={orderId} />
        ) : (
          <DateForm getData={dateUser} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
