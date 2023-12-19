import Clase from "./Boton.module.css";
const Boton = (propiedades) => {
  return (
    <>
      <button className={Clase.boton}>{propiedades.greeting}</button>
    </>
  );
};

export default Boton;
