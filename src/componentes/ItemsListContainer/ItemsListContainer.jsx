import Clase from "./ItemsListContainer.module.css";
import {getProductos,getProductosCategori} from "../../asyncMock";
import React, { useState, useEffect } from "react";
import ListItems from "../ListItems/ListItems";
import { useParams } from "react-router-dom";
import { UseCart, CartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import { db } from "../../service/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemsListContainer = (propiedades) => {
  let [productos, setProductos] = useState([]);
 
  const {categoriId}=useParams()
  const {loading,setLoading}=UseCart(CartContext)

  useEffect(() => {

    const collectionProductos = collection(db,"productos")
     setLoading(true)
    getDocs(collectionProductos).then(querySnapshot =>{ 
      console.log(querySnapshot);
      const productosAdaptados = querySnapshot.docs.map(doc=>{
      const fields = doc.data()
       return {
        id:doc.id, 
        ...fields
      }
    })
    setProductos(productosAdaptados)
    }).finally(
      setLoading(false)
    )
  //  const asyncFuntion = categoriId ? getProductosCategori : getProductos ;

  //   asyncFuntion(categoriId).then((res) => {
      
  //     return setProductos(res);
  //   });
  }, [categoriId]);

  return (
    <div className={Clase.contenedor}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className={Clase.titulo}>{propiedades.greeting}</h1>
          <ListItems productos={productos} />
        </>
      )}
    </div>
  );
};
export default ItemsListContainer;
