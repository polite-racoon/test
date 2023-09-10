import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { ItemList, AddToCartModal, StockWarningModal } from '../components/ui';
import { ProductosContext } from '../context/productos';

const Accesorios = () => {
  const { productosDisponibles } = useContext(ProductosContext);
  const accesorios = productosDisponibles.filter(
    (producto) => producto.category === 'accesorios'
  );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Accesorios</Typography>
      </Box>
      <ItemList productos={accesorios} />
      <AddToCartModal />
      <StockWarningModal />
    </Layout>
  );
};

export default Accesorios;
