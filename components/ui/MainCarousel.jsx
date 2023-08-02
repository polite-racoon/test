import { Box } from '@mui/material';

import { CarouselFade } from './CarouselFade';

export const MainCarousel = ({ productos }) => {
  const lastProducts = productos.slice(0, 3);

  return (
    <Box display="flex" justifyContent="center">
      <CarouselFade elements={lastProducts} />
    </Box>
  );
};
