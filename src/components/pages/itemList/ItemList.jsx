import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <section>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </Grid>
    </section>
  );
};
