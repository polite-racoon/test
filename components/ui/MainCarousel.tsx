import { useContext } from 'react';
import { Box } from '@mui/material';

import { CarouselFade } from './CarouselFade';
import { ProductosContext } from '../../context/productos';

export const MainCarousel = () => {
  const { productos } = useContext(ProductosContext);
  const lastProducts = productos.slice(0, 3);

  return (
    <Box display="flex" justifyContent="center">
      <CarouselFade elements={lastProducts} />
    </Box>
  );
};
