import { db } from "../firebaseConfig";
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
  or,
} from "firebase/firestore";
import { createProductsAdapter } from "./createProductsAdapter";

export const getProducts = (categoriId) => {
  const collectionProductos = categoriId
    ? query(collection(db, "productos"), where("categoria", "==", categoriId))
    : collection(db, "productos");

  return getDocs(collectionProductos)
    .then((querySnapshot) => {
      const productosAdaptados = querySnapshot.docs.map((doc) => {
        return createProductsAdapter(doc);
      });
      return productosAdaptados;
    })
    .catch((error) => {
      return error;
    });
};

export const getProductsById = (productId) => {
  const prodAdapterId = doc(db, "productos", productId);

  return getDoc(prodAdapterId)
    .then((queryDocumentSnapshot) => {
      const prodAdapte = createProductsAdapter(queryDocumentSnapshot);
      return prodAdapte;
    })
    .catch((error) => {
      return error;
    });
};
export const getProductsFilter = (nombre) => {
  const collectionProductos = query(collection(db, "productos"),or( where("nombre", "==", nombre),where("categoria", "==", nombre)))
    
  return getDocs(collectionProductos)
    .then((querySnapshot) => {
      const productosAdaptados = querySnapshot.docs.map((doc) => {
        return createProductsAdapter(doc);
      });
      return productosAdaptados;
    })
    .catch((error) => {
      return error;
    });
};