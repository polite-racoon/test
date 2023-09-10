import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { ItemList, AddToCartModal, StockWarningModal } from '../components/ui';
import { ProductosContext } from '../context/productos';

const Galletas = () => {
  const { productosDisponibles } = useContext(ProductosContext);
  const galletas = productosDisponibles.filter(
    (producto) => producto.category === 'galletas'
  );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Galletas</Typography>
      </Box>
      <ItemList productos={galletas} />
      <AddToCartModal />
      <StockWarningModal />
    </Layout>
  );
};

export default Galletas;
