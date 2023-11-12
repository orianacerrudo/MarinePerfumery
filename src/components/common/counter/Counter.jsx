import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const Counter = ({ sumar, contador, restar, onAdd }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button color={"secondary"} onClick={restar}>
          <RemoveIcon></RemoveIcon>
        </Button>

        <Typography
          sx={{ marginLeft: 1, marginRight: 1 }}
          variant="h5"
          color={"secondary"}
        >
          {contador}
        </Typography>

        <Button color={"secondary"} onClick={sumar} sx={{ marginRight: 1 }}>
          <AddIcon></AddIcon>
        </Button>
      </ButtonGroup>
      <Button
        variant="outlined"
        color={"secondary"}
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};
