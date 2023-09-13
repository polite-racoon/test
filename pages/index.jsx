import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductosContext } from '../context/productos';

import {
  Logger,
  ItemList,
  AddToCartModal,
  StockWarningModal,
  MainCarousel,
} from '../components/ui';
import { useAuth } from '../context/auth';
import { Layout } from '../components/layouts';

const Home = () => {
  const { user } = useAuth();
  const { productosDisponibles } = useContext(ProductosContext);

  return (
    <Layout>
      {!user && (
        <Box sx={{ margin: '1.5rem 0 2rem 0' }}>
          {' '}
          <Logger />
        </Box>
      )}
      <MainCarousel productos={productosDisponibles} />
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{ margin: '2rem', fontFamily: 'Sacramento', fontSize: '1.5rem' }}
        >
          - damos vida a tu hogar -
        </Typography>
      </Box>
      <ItemList productos={productosDisponibles} />
      <AddToCartModal />
      <StockWarningModal />
    </Layout>
  );
};

export default Home;
