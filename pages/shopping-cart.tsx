import { useContext } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { Layout } from '../components/layouts';
import { ReservasContext } from '../context/reservas';
import { ShoppingCartItem } from '../components/ui';
import { BuyButton } from '../components/ui/BuyButton';

const ShoppingCartPage = () => {
  const { reservas } = useContext(ReservasContext);
  let total = 0;
  reservas.forEach((reserva) => {
    const quantity = reserva?.quantity || 0;
    const price = reserva?.price || 0;
    total += quantity * price;
  });

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1rem',
          paddingBottom: '1.5rem',
        }}
      >
        <Typography variant={'h4'} sx={{ fontFamily: 'Sacramento' }}>
          mi carrito
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {reservas.map((reserva, i) => {
            return (
              <ShoppingCartItem key={i} reserva={reserva!} priority={i < 3} />
            );
          })}
        </Grid>
      </Box>
      <Paper
        sx={{
          padding: '1rem',
          margin: '2rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontFamily: 'Sacramento' }}>
          total:
        </Typography>
        <Typography
          sx={{ fonSize: '1.5rem', fontFamily: 'Sacramento' }}
        >{` $${total}`}</Typography>
      </Paper>
      <BuyButton disabled={total === 0} />
    </Layout>
  );
};

export default ShoppingCartPage;
