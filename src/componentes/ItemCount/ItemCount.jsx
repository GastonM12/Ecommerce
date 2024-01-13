import { useState } from "react";
import Clase from "./Contador.module.css";

function Contador(propiedades) {
  let [contador, setContador] = useState(propiedades.inicio);
  const sumar = () => {
    if (contador < propiedades.stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > propiedades.inicio) {
      setContador(contador - 1);
    }
  };

  return (
    <div className={Clase.contenedor}>
      <div className={Clase.contenedorBotones}>
        <button className={Clase.boton} onClick={restar}>
          -
        </button>
        <h2 className={Clase.contador}>{contador}</h2>
        <button className={Clase.boton} onClick={sumar}>
          +
        </button>
      </div>
      <button
        className={Clase.botonAgregar}
        onClick={() => propiedades.onAdd(contador)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default Contador;
