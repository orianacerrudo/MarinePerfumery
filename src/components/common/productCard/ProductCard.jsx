import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

const ProductCard = ({ item }) => {
  return (
    <Grid item /*xs={12} sm={6} md={3}*/>
      <Card
        sx={{
          maxWidth: 300,
        }}
      >
        <CardMedia
          sx={{ height: 300, width: 300 }}
          image={item.img}
          title={`image ${item.title}`}
        />
        <CardContent sx={{ height: 90 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={"secondary"}
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color={"secondary"}>
            ${item.price} .
          </Typography>
        </CardContent>
        <CardActions>
          {item.stock > 0 ? (
            <Button size="small" color={"primary"} variant="contained">
              <Link to={`/itemDetail/${item.id}`} style={linkStyle}>
                <Typography color={"secondary"}>Ver más</Typography>
              </Link>
            </Button>
          ) : (
            <Button size="small" disabled variant="contained">
              <Typography color={"secondary"}>No hay stock</Typography>
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
