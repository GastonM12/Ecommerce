import Clase from "./ItemsListContainer.module.css";
import {getProductos,getProductosCategori} from "../../asyncMock";
import React, { useState, useEffect } from "react";
import ListItems from "../ListItems/ListItems";
import { useParams } from "react-router-dom";

const ItemsListContainer = (propiedades) => {
  let [productos, setProductos] = useState([]);
 
  const {categoriId}=useParams()

  useEffect(() => {
   const asyncFuntion = categoriId ? getProductosCategori : getProductos ;

    asyncFuntion(categoriId).then((res) => {
      
      return setProductos(res);
    });
  }, [categoriId]);

  return (
    <div>
      <h1 className={Clase.titulo}>{propiedades.greeting}</h1>
      <ListItems productos={productos} />
    </div>
  );
};
export default ItemsListContainer;
