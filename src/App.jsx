import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { useState } from "react";
import SideBar from "./componentes/SideBar/SideBar";
import Clase from "./App.module.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";
import ItemsDetailContainer from "./componentes/itemsDetailContainer/ItemsDetailContainer";
import Cart from "./componentes/Cart/Cart";
import Preloader from "./componentes/Preloader/Preloader";
import Footer from "./componentes/Footer/Footer";
import Checkout from "./componentes/Checkout/Checkout";
function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1700);

  return (
    <>
      <section className={Clase.contenedorPrincipal}>
        {loading ? (
          <Preloader />
        ) : (
          <section className={Clase.container}>
            <BrowserRouter>
              <CartProvider>
                <div>
                  <SideBar />
                </div>
                <div className={Clase.contenedorPrincipal}>
                  <NavBar />
                  <Routes>
                    <Route
                      path="/"
                      element={<ItemsListContainer greeting={"Productos"} />}
                    />{" "}
                    <Route
                      path="/categori/:categoriId"
                      element={<ItemsListContainer greeting={"Productos"} />}
                    />
                    <Route
                      path="/detalle/:productId"
                      element={<ItemsDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route
                      path="*"
                      element={<h1 className={Clase.error}>404 not found</h1>}
                    />
                  </Routes>
                </div>
              </CartProvider>
            </BrowserRouter>
          </section>
        )}
        <footer className={Clase.footer}>
          <Footer />
        </footer>
      </section>
    </>
  );
}

export default App;
