import { useContext } from 'react';
import { ProductosContext } from '../../context/productos';
import { Box } from '@mui/material';

import { CarouselFade } from './CarouselFade';

export const MainCarousel = () => {
  const { productosDisponibles } = useContext(ProductosContext);
  const lastProducts = productosDisponibles.slice(0, 3);

  return (
    <Box display="flex" justifyContent="center">
      <CarouselFade elements={lastProducts} />
    </Box>
  );
};
