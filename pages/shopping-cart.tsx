import { useContext } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { Layout } from '../components/layouts';
import { ReservasContext } from '../context/reservas';
import { ItemB } from '../components/ui';

const ShoppingCartPage = () => {
  const { reservas } = useContext(ReservasContext);
  let total = 0;
  reservas.forEach((reserva) => (total += Number(reserva.price)));

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
            return <ItemB key={i} reserva={reserva} />;
          })}
        </Grid>
      </Box>
      <Paper
        sx={{
          padding: '1rem',
          margin: '1rem',
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
    </Layout>
  );
};

export default ShoppingCartPage;
