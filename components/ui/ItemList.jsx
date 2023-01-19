import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Item } from "./Item";
import firebase from "../../firebase/client";

export const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const temp = [];
    db.collection("productos")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          temp.push({ ...data, id });
        });
        setItems(temp);
      });
  }, []);

  return (
    <Grid container spacing={1.3}>
      {items.map(({ title, price, imageUrl, id }) => {
        return (
          <Grid item xs={6} md={4} key={id}>
            <Item title={title} price={price} imageUrl={imageUrl} />
          </Grid>
        );
      })}
    </Grid>
  );
};
