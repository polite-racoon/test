import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';

import { useAuth } from '../context/auth';
import { Layout } from '../components/layouts';
import {
  Logger,
  ItemList,
  AddToCartModal,
  CarouselFade,
} from '../components/ui';

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Box sx={{ margin: '1rem 0 2rem 0' }}>{!user && <Logger />}</Box>
      <Box display="flex" justifyContent="center">
        <CarouselFade />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{ margin: '2rem', fontFamily: 'Sacramento', fontSize: '1.5rem' }}
        >
          - lorem ipsum dolor -
        </Typography>
      </Box>
      <ItemList />
      <AddToCartModal />
    </Layout>
  );
};

export default Home;

/* <Typography
  variant={'h5'}
  sx={{
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}
>
  -COMPRAR-
</Typography>; */
