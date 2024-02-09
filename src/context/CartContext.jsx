import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState([]);
  const [fav, setFav] = useState([]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const addItems = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    } else {
      console.error("el producto ya fue agregado");
    }
  };
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItems = (id) => {
    const newCart = cart.filter((prod) => prod.id === id);
    setCart(newCart);
  };

  const getTotalQuantity = () => {
    let acc = 0;

    cart.forEach((prod) => (acc += prod.quantity));
    return acc;
  };

  const ClearCart = (productToAdd) => {
    if (isInCart(productToAdd.id)) {
      Swal.fire({
        title: "Estas seguro?",
        text: "No podrás revertir esto.!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar del carrito",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "¡Eliminado!",
            text: "El producto ha sido eliminado",
            icon: "success",
          });
          const newcart = cart.filter((prod) => prod.id !== productToAdd.id);
          return setCart(newcart);
        }
      });
    }
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let acc = 0;

    cart.forEach((prod) => (acc += prod.quantity * prod.precio));
    return acc;
  };
  const total = getTotal();

  const addFav = (prod) => {
    if (!isItFav(prod.id)) {
      setFav((prev) => [...prev, prod]);
      Toast.fire({
        icon: "success",
        title: "Se agrego correctamente a la lista de favoritos",
      });
    } else {
      const newCart = fav.filter((producto) => producto.id !== prod.id);
      return setFav(newCart);
    }
  };
  const isItFav = (id) => {
    return fav.some((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItems,
        isInCart,
        removeItems,
        totalQuantity,
        ClearCart,
        search,
        setSearch,
        total,
        addFav,
        fav,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const UseCart = () => {
  return useContext(CartContext);
};
