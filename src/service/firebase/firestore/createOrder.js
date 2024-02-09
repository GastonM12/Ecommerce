import {
  getDocs,
  collection,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import Swal from "sweetalert2";
export const createOrder = async (userData, cart, total) => {
  const objOrden = {
    buyer: userData,
    items: cart,
    total,
  };

  const batch = writeBatch(db);
  const outOfStock = [];
  const ids = cart.map((prod) => prod.id);
  const productsCollections = query(
    collection(db, "productos"),
    where(documentId(), "in", ids)
  );

  const querySnapshot = await getDocs(productsCollections);
  const { docs } = querySnapshot;
  docs.forEach((doc) => {
    const fields = doc.data();
    const stockDb = fields.stock;

    const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
    const prodQuantity = productsAddedToCart.quantity;

    if (stockDb >= prodQuantity) {
      batch.update(doc.ref, { stock: stockDb - prodQuantity });
    } else {
      outOfStock.push({ id: doc.id, ...fields });
    }
  });
  if (outOfStock.length === 0) {
    batch.commit();
    const orderCollection = collection(db, "orders");
    const { id } = await addDoc(orderCollection, objOrden);

    return id;
  } else {
    return Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
