import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import { Box, Typography } from '@mui/material';

import { useAuth } from '../context/auth';
import { Layout } from '../components/layouts';
import { Logger, ItemList, AddToCartModal } from '../components/ui';

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Box sx={{ margin: '1rem 0 2rem 0' }}>{!user && <Logger />}</Box>
      <Box display="flex" justifyContent="center">
        <Image
          src="/cookie2.jpg"
          width={680}
          height={454}
          alt="caja con galletas de navidad"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant={'h5'} fontStyle="italic" sx={{ margin: '2rem' }}>
          - galletas artesanales -
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
