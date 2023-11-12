import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Cartwidget } from "../../common/cartWidget/Cartwidget";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" style={linkStyle}>
            <Typography variant="h5" component="div" color={"secondary"}>
              Marine Perfumery 🌷
            </Typography>
          </Link>
        </Box>

        <Link to="/category/Mujeres">
          <Button variant="contained" color={"secondary"}>
            Mujeres
          </Button>
        </Link>
        <Link to="/category/Hombres">
          <Button variant="contained" color={"secondary"}>
            Hombres
          </Button>
        </Link>
        <Link to="/">
          <Button variant="contained" color={"secondary"}>
            Todos
          </Button>
        </Link>
        <Link to="/cart">
          <Button variant="contained" color={"secondary"}>
            Carrito
          </Button>
        </Link>

        <Cartwidget />
      </Toolbar>
    </AppBar>
  );
};
