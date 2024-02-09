import React from "react";
import Clase from "./ListDetails.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCart } from "../../context/cartContext";
import { FiShoppingBag } from "react-icons/fi";
import Swal from "sweetalert2";

const ListDetails = ({ nombre, imagen, precio, id, stock, descripcion }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItems } = UseCart();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleOnAdd = (quantity) => {
    const objProduc = {
      id,
      nombre,
      quantity,
      imagen,
      precio,
    };
    setQuantityAdded(quantity);
    addItems(objProduc);
    Toast.fire({
      icon: "success",
      title: "Se agrego correctamente",
    });
  };
  if (stock === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No hay stock!",
    });
    return (
      <div className={Clase.contenedor}>
        <img className={Clase.imagen} src={imagen} />
        <div className={Clase.contenedorDescripcion}>
          <h1 className={Clase.titulo}>Sin stock!</h1>
          <FiShoppingBag className={Clase.icono} />
        </div>
      </div>
    );
  }
  return (
    <div className={Clase.contenedor}>
      <img className={Clase.imagen} src={imagen} alt={nombre}/>
      <div className={Clase.contenedorDescripcion}>
        <h2 className={Clase.nombre}>{nombre}</h2>
        <h5 className={Clase.precio}> {descripcion}</h5>
        <h3 className={Clase.precio}> Precio: ${precio}</h3>
        <h3 className={Clase.stock}> Stock Disponible: {stock}</h3>
        {quantityAdded === 0 ? (
          <ItemCount stock={stock} inicio={1} onAdd={handleOnAdd} />
        ) : (<>
          <Link to={"/cart"} className={Clase.btn}>
            Finalizar Compra
          </Link>
        </>
        )}
      </div>
    </div>
  );
};

export default ListDetails;
