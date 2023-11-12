import { Cart } from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, vaciarCarrito, borrarProd, precioTotal, cantidadTotal } =
    useContext(CartContext);

  return (
    <Cart
      cart={cart}
      vaciarCarrito={vaciarCarrito}
      borrarProd={borrarProd}
      precioTotal={precioTotal}
      cantidadTotal={cantidadTotal}
    />
  );
};
