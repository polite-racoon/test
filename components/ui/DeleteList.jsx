import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { DeleteItem } from "./DeleteItem";
import firebase from "../../firebase/client";
import { getImageNameFromImageUrl } from "../../functions";

export const DeleteList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("productos").onSnapshot((qs) => {
      const temp = [];
      qs.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        temp.push({ ...data, id });
      });
      setItems(temp);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const onDelete = (id, imageUrl) => {
    const imageName = getImageNameFromImageUrl(imageUrl);
    const desertRef = firebase
      .storage()
      .ref()
      .child(`fotosDeProductos/${imageName}`);

    desertRef
      .delete()
      .then(() => {
        db.collection("productos").doc(id).delete();
      })
      .then(() => {
        console.log("document deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={1.3}>
      {items.map(({ title, price, imageUrl, id }) => {
        return (
          <Grid item xs={6} md={4} key={id}>
            <DeleteItem
              title={title}
              price={price}
              imageUrl={imageUrl}
              onDelete={onDelete}
              id={id}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
