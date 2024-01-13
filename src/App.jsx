import SideBar from "./componentes/SideBar/SideBar";
import Clase from "./App.module.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";
import ItemsDetailContainer from "./componentes/itemsDetailContainer/ItemsDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <section className={Clase.seccionPrincipal}>
      <BrowserRouter>
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
            <Route
              path="*"
              element={<h1 className={Clase.error}>404 not found</h1>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
