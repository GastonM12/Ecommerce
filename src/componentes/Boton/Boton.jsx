import Clase from "./Boton.module.css";
function Boton(nombre) {
  return (
    <>
      <a className={Clase.boton}>{nombre.msj}</a>
    </>
  );
}

export default Boton;
