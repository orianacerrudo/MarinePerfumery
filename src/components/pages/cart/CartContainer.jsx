import { Cart } from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, vaciarCarrito, borrarProd, precioTotal, cantidadTotal } =
    useContext(CartContext);

  const vaciar = () => {
    Swal.fire({
      title: "¿Quieres vaciar el carrito?",
      text: "Esta acción será irreversible.",
      icon: "warning",
      iconColor: " #FF00A1",
      showCancelButton: true,
      confirmButtonColor: " #FF00A1",
      cancelButtonColor: "#92005C",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire({
          title: "Confirmado!",
          text: "Tu carrito ha sido vaciado",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  return (
    <Cart
      cart={cart}
      vaciarCarrito={vaciarCarrito}
      borrarProd={borrarProd}
      precioTotal={precioTotal}
      cantidadTotal={cantidadTotal}
      vaciar={vaciar}
    />
  );
};
