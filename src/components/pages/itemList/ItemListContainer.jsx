import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

import { useParams } from "react-router-dom";

//firebase
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebaseconfig";

// loader
import { FadeLoader } from "react-spinners";
import { Box } from "@mui/material";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = undefined;

    if (!categoryName) {
      //si no existe category name
      consulta = productsCollection;
    } else {
      // si existe category name
      //firebase
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consulta).then((res) => {
      let nuevoArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(nuevoArray);
    });

    //category name
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <FadeLoader color="#FF00A1" />
        </Box>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
