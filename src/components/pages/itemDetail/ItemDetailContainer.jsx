import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
//firebase
import { db } from "../../../firebaseconfig";
import { getDoc, collection, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  // este id llega como string ""
  const { id } = useParams();

  //context
  const { agregarAlCarrito, obtenerCantidad } = useContext(CartContext);

  let cantidadTotal = obtenerCantidad(+id);

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);

    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let prod = {
      ...productSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(prod);
    Swal.fire({
      width: "22em",
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito con éxito.",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={cantidadTotal}
    />
  );
};
