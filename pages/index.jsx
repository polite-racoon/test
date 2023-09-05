import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import {
  Logger,
  ItemList,
  AddToCartModal,
  StockWarningModal,
  MainCarousel,
} from '../components/ui';
import { useAuth } from '../context/auth';
import { Layout } from '../components/layouts';
import firebase from '../firebase/client';

const Home = () => {
  const { user } = useAuth();
  const db = firebase.firestore();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // En la base de datos debemos observar todos los productos, tambien los sin stock, por si vuelven a tener stock
    const unsubscribe = db.collection('productos').onSnapshot((qs) => {
      const temp = [];
      qs.forEach((doc) => {
        const data = doc.data();
        if (data.stock === 0) return; // filtra los productos sin stock.
        const id = doc.id;
        temp.push({ ...data, id });
      });
      setProductos(temp);
    });
    return () => {
      unsubscribe();
    };
  }, [db]);

  return (
    <Layout>
      <Box sx={{ margin: '1rem 0 2rem 0' }}>{!user && <Logger />}</Box>
      <MainCarousel productos={productos} />
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{ margin: '2rem', fontFamily: 'Sacramento', fontSize: '1.5rem' }}
        >
          - lorem ipsum dolor -
        </Typography>
      </Box>
      <ItemList productos={productos} />
      <AddToCartModal />
      <StockWarningModal />
    </Layout>
  );
};

export default Home;
