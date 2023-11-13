import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./cart.css";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = ({
  cart,
  vaciar,
  borrarProd,
  precioTotal,
  cantidadTotal,
}) => {
  let total = precioTotal();
  let cantidad = cantidadTotal();

  return (
    <>
      {cantidad > 0 ? (
        <Box>
          <h2 className="tituloCarrito">Carrito de Compras</h2>
          {cart.map((product) => (
            <section
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <Card sx={{ minWidth: 400 }}>
                <CardContent>
                  <Typography variant="h5" color={"secondary"} gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ mb: 1.5 }} color={"secondary"}>
                    ${product.price}
                  </Typography>
                  <Typography variant="body2">
                    Cantidad: {product.quantity}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => borrarProd(product.id)}
                    variant="contained"
                    color={"secondary"}
                    size="small"
                  >
                    <DeleteIcon />
                  </Button>
                </CardActions>
              </Card>
            </section>
          ))}
          <h3
            style={{
              color: "#FF00A1",
              display: "flex",
              justifyContent: "center",
            }}
          >
            El precio total de su compra es: ${total}
          </h3>
          <br />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link to={"/checkout"}>
              <Button variant="contained" color={"secondary"}>
                Finalizar compra
              </Button>
            </Link>

            <Button onClick={vaciar} variant="contained" color={"secondary"}>
              Vaciar carrito
            </Button>
          </Box>
          <br />
        </Box>
      ) : (
        <>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LocalMallIcon color="secondary" sx={{ fontSize: 60 }} />
          </section>
          <h1 className="tituloCarrito2">
            Su carrito actualmente se encuentra vacío!
          </h1>
          <h2 className="tituloCarrito2">
            Agregue productos para visualizarlos aquí.
          </h2>
          <br />
          <section
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to={"/"}>
              <Button variant="contained" color={"secondary"}>
                Descubrir productos
              </Button>
            </Link>
          </section>
        </>
      )}
    </>
  );
};
