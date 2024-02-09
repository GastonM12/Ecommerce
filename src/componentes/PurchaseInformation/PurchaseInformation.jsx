import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
const PurchaseInformation = ({ data, id }) => {
  const { nombre, apellido } = data;
  return (
    <div>
      <h2>
        Muchas gracias por su compra {nombre.toUpperCase()}{" "}
        {apellido.toUpperCase()}
      </h2>
      <h3>El id de su compra es {id}</h3>
      <Link to={"/"}>
        <Boton greeting={"Seguir comprando"} />
      </Link>
    </div>
  );
};

export default PurchaseInformation;
