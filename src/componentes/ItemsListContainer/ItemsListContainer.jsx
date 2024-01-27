import Clase from "./ItemsListContainer.module.css";
import React, { useState, useEffect } from "react";
import ListItems from "../ListItems/ListItems";
import { useParams } from "react-router-dom";
import { UseCart, CartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import { db } from "../../service/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemsListContainer = (propiedades) => {
  let [productos, setProductos] = useState([]);
  const { categoriId } = useParams();
  const { loading, setLoading } = UseCart(CartContext);

  useEffect(() => {
    setLoading(true);
    const productCollection = categoriId
      ? query(collection(db, "productos"), where("categoria", "==", categoriId))
      : collection(db, "productos");

    getDocs(productCollection)
      .then((querySnapshot) => {
        const productAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return {
            id: doc.id,
            ...fields,
          };
        });
        setProductos(productAdapted);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
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
