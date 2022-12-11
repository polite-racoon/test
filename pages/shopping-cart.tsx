import Image from 'next/image';
import { Box, Card, Grid, Typography } from '@mui/material';

const ShoppingCartPage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1rem',
          paddingBottom: '1.5rem',
        }}
      >
        <Typography variant={'h6'}>Mi Carrito</Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: '#eee',
              }}
            >
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <Image src="/cookie1.jpg" width={680} height={1020} alt="" />
                </Grid>
                <Grid item xs={8}>
                  <Typography>a</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ShoppingCartPage;
