import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

//firebase
import {
  serverTimestamp,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseconfig";

export const Checkout = () => {
  //informacion sobre los usuarios
  const [infoUsu, setInfoUsu] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    email: "",
    confirmEmail: "",
  });
  const [orderID, setOrderID] = useState(null);
  // emails
  const [emailError, setEmailError] = useState(false);
  // campos vacios
  const [formError, setFormError] = useState(false);

  //context
  const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

  let total = precioTotal();

  //funcion
  const handleChange = (ev) => {
    setInfoUsu({ ...infoUsu, [ev.target.name]: ev.target.value });
  };

  //funcion para enviar el formulario
  const handleSubmit = (ev) => {
    ev.preventDefault();
    //confirmacion de emails al enviar el formulario
    if (infoUsu.email !== infoUsu.confirmEmail) {
      setEmailError(true);
      return;
    }
    const camposVacios = Object.values(infoUsu).some((value) => value === "");

    if (camposVacios || infoUsu.email !== infoUsu.confirmEmail) {
      setFormError(true);
      return;
    }

    let order = {
      buyer: infoUsu,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => {
      setOrderID(res.id);
    });

    //restar el stock de la base de datos
    cart.forEach((el) => {
      updateDoc(doc(db, "products", el.id), {
        stock: el.stock - el.quantity,
      });
    });
    vaciarCarrito();
  };

  return (
    <>
      {orderID ? (
        <div>
          <h2>
            Compra realizada con éxito, su número de seguimiento es el
            siguiente: {orderID}
          </h2>
          <h3>Muchas gracias por comprar en Marine perfumery!</h3>
          <h4>Hasta pronto...</h4>
          <Link to={"/"}>
            <Button variant="contained" color={"secondary"}>
              Seguir comprando
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <br />
          <h2 className="tituloCarrito">Datos del comprador</h2>
          <div
            style={{ margin: 15, display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: 400,
                maxWidth: "100%",
                backgroundColor: "#FFC3EC",
                padding: 3,
                borderRadius: 2,
              }}
              component="form"
              onSubmit={handleSubmit}
            >
              <div style={{ backgroundColor: "#fff7fc" }}>
                <TextField
                  color="secondary"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  //
                  type="text"
                  name="nombre"
                  label="Nombre"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div style={{ backgroundColor: "#fff7fc" }}>
                <TextField
                  color="secondary"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  //
                  type="text"
                  name="apellido"
                  label="Apellido"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div style={{ backgroundColor: "#fff7fc" }}>
                <TextField
                  color="secondary"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  //
                  type="number"
                  name="numero"
                  label="Numero telefonico"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div style={{ backgroundColor: "#fff7fc" }}>
                <TextField
                  color="secondary"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  //
                  type="email"
                  name="email"
                  label="Correo electrónico"
                  onChange={handleChange}
                  // email
                  error={emailError}
                  helperText={emailError && "Los correos no coinciden"}
                />
              </div>
              <br />
              <div style={{ backgroundColor: "#fff7fc" }}>
                <TextField
                  color="secondary"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  //
                  type="email"
                  name="confirmEmail"
                  label="Confirmar correo electrónico"
                  onChange={handleChange}
                  // email
                  error={emailError}
                  helperText={emailError && "Los correos no coinciden"}
                />
              </div>
              <div>
                {formError && (
                  <p style={{ color: "#FF00A1", marginTop: "10px" }}>
                    Por favor, no deje campos vacios.
                  </p>
                )}
              </div>
              <br />
              <div>
                <Button type="submit" variant="contained" color={"secondary"}>
                  Enviar
                </Button>
              </div>
            </Box>
          </div>
          <br />
          <h3
            style={{
              color: "#FF00A1",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Si no desea finalizar la compra en este momento, puede volver al
            inicio de la página o a su carrito:
          </h3>
          <br />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link to={"/"}>
              <Button
                sx={{ marginRight: 2 }}
                variant="contained"
                color={"secondary"}
              >
                Ir al inicio
              </Button>
            </Link>

            <Link to={"/cart"}>
              <Button variant="contained" color={"secondary"}>
                Ir a mi carrito
              </Button>
            </Link>
          </Box>
        </div>
      )}
    </>
  );
};
