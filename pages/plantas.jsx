import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { ItemList, AddToCartModal, StockWarningModal } from '../components/ui';
import { ProductosContext } from '../context/productos';

const Plantas = () => {
  const { productosDisponibles } = useContext(ProductosContext);
  const plantas = productosDisponibles.filter(
    (producto) => producto.category === 'plantas'
  );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Plantas</Typography>
      </Box>
      <ItemList productos={plantas} />
      <AddToCartModal />
      <StockWarningModal />
    </Layout>
  );
};

export default Plantas;
