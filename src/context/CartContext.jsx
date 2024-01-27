import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

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
      const newcart = cart.filter((prod) => prod.id !== productToAdd.id);
      return setCart(newcart);
    }
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = ()=>{
    let acc = 0;

    cart.forEach((prod) => (acc += prod.quantity * prod.precio));
    return acc;
 
 return acc
 }
 const total = getTotal()
  return (
    <CartContext.Provider
      value={{
        cart,
        addItems,
        isInCart,
        removeItems,
        totalQuantity,
        ClearCart,
        loading,
        setLoading,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const UseCart = () => {
  return useContext(CartContext);
};
