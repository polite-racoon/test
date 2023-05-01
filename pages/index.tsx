import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';

import {
  Logger,
  ItemList,
  AddToCartModal,
  MainCarousel,
} from '../components/ui';
import { useAuth } from '../context/auth';
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Box sx={{ margin: '1rem 0 2rem 0' }}>{!user && <Logger />}</Box>
      <MainCarousel />
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
