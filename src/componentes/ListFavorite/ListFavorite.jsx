import { Link } from "react-router-dom";
import Clase from "./ListFavorite.module.css";
import Boton from "../Boton/Boton";
const ListFavorite = ({ nombre, img, precio, id }) => {
  return (
    <div className={Clase.contenedor}>
      <img className={Clase.imagen} src={img} alt={nombre} />
      <h1 className={Clase.nombre}>{nombre}</h1>
      <h1 className={Clase.precio}>${precio}</h1>
      <Link to={`/detalle/${id}`}>
        {" "}
        <Boton greeting={"Ver mas"} />
      </Link>
      <div className={Clase.span}></div>
    </div>
  );
};

export default ListFavorite;
