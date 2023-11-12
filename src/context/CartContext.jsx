import { createContext, useState } from "react";

//sa
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //funcion, agregar al carrito
  const agregarAlCarrito = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      // si es que ya existe un producto igual entonces
      let nuevoCarrito = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(nuevoCarrito);
      localStorage.setItem("cart", JSON.stringify(nuevoCarrito));
    } else {
      //mantiene tooodo lo del carrito + el producto agregado, si es que no existe otro producto igual
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  // si hay un mismo producto en el carrito
  const isInCart = (id) => {
    let existe = cart.some((element) => element.id === id);
    return existe;
  };

  // obtener cantidad por el id
  const obtenerCantidad = (id) => {
    let product = cart.find((element) => element.id === id);
    return product?.quantity;
  };

  // precio total del carrito
  const precioTotal = () => {
    let total = cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
    return total;
  };

  // borrar un elemento en concreto del carrito
  const borrarProd = (id) => {
    let nuevoArr = cart.filter((product) => product.id !== id);
    //SA
    Swal.fire({
      title: "¿Quieres borrar este producto?",
      icon: "warning",
      iconColor: " #FF00A1",
      showCancelButton: true,
      confirmButtonColor: " #FF00A1",
      cancelButtonColor: "#92005C",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // si se borra se ejecuta
        setCart(nuevoArr);
        localStorage.setItem("cart", JSON.stringify(nuevoArr));
        //
        Swal.fire({
          title: "Confirmado!",
          text: "Tu producto ha sido borrado",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  // vaciar el carrito
  const vaciarCarrito = () => {
    /*  Swal.fire({
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
      if (result.isConfirmed) { */
    // si se borra se ejecuta
    setCart([]);
    localStorage.removeItem("cart");
    //
    /*   Swal.fire({
          title: "Confirmado!",
          text: "Tu carrito ha sido vaciado",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }); */
  };

  // cantitad total de elementos
  const cantidadTotal = () => {
    let total = cart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    agregarAlCarrito,
    obtenerCantidad,
    vaciarCarrito,
    borrarProd,
    precioTotal,
    cantidadTotal,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
