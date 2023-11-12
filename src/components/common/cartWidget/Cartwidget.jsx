import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const Cartwidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  let total = cantidadTotal();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="secondary" showZero>
        <ShoppingCartIcon color="secondary" />
      </Badge>
    </Link>
  );
};
