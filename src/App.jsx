import SideBar from "./componentes/SideBar/SideBar";
import Clase from "./App.module.css";
import NavBar from "./componentes/NavBar/NavBar";
import Contador from "./componentes/Contador/Contador";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";

function App() {
  return (
    <section className={Clase.seccionPrincipal}>
      <div>
        <SideBar />
      </div>
      <div className={Clase.contenedorPrincipal}>
        <NavBar />
        <ItemsListContainer greeting={"Bienvenidos"} />
        <div className={Clase.contenedorProductos}>
          <Contador
            inicio={1}
            stock={15}
            onAdd={(valor) => console.log(valor)}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
