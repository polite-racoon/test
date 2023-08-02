import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { DeleteItem } from './DeleteItem';
import firebase from '../../firebase/client';

export const DeleteList = () => {
  const db = firebase.firestore();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('productos').onSnapshot((qs) => {
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
  }, [db]);

  return (
    <Grid container spacing={1.3}>
      {items.map(
        ({ title, price, imageUrl, landscapeImgUrl, id, stock }, i) => {
          return (
            <Grid item xs={6} md={4} key={id}>
              <DeleteItem
                title={title}
                price={price}
                imageUrl={imageUrl}
                landscapeImgUrl={landscapeImgUrl}
                id={id}
                stock={stock}
                priority={i < 4}
              />
            </Grid>
          );
        }
      )}
    </Grid>
  );
};
