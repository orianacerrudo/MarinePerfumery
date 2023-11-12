import { useState } from "react";
import { Counter } from "./Counter";
import Swal from "sweetalert2";

export const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Cantidad máxima de stock",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <Counter sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} />
  );
};
