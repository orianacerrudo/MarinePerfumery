import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { CounterContainer } from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <>
      <div
        style={{
          margin: 10,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img style={{ width: 450 }} src={productSelected.img} alt="" />
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>

        <div>
          <Card
            sx={{
              maxWidth: 500,
              marginLeft: 1,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                color={"secondary"}
              >
                {productSelected.title}
              </Typography>
              <Typography color={"secondary"} sx={{ fontSize: 18 }}>
                {productSelected.description}
              </Typography>
              <Typography color={"secondary"}>
                ${productSelected.price} .
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
