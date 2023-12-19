import Clase from "./Boton.module.css";
function BotonConEnlace(propiedades) {
  return (
    <>
      <a href={propiedades.href} className={Clase[propiedades.clase]}>
        {propiedades.msj}
      </a>
    </>
  );
}

export default BotonConEnlace;
