import { useState, useContext } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { Layout } from '../components/layouts';
import { ReservasContext } from '../context/reservas';
import { ShoppingCartItem } from '../components/ui';
import { BuyButton } from '../components/ui/buttons/BuyButton';
import { PurchaseModal } from '../components/ui/modals/PurchaseModal';
import { PhoneModal } from '../components/ui/modals/PhoneModal';
import { SigninModal } from '../components/ui/modals/SigninModal';

const ShoppingCartPage = () => {
  const [phone, setPhone] = useState('');
  const [repeatedPhone, setRepeatedPhone] = useState('');

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
      <BuyButton
        disabled={total === 0}
        setPhone={setPhone}
        setRepeatedPhone={setRepeatedPhone}
      />
      <SigninModal />
      <PhoneModal
        phone={phone}
        setPhone={setPhone}
        repeatedPhone={repeatedPhone}
        setRepeatedPhone={setRepeatedPhone}
      />
      <PurchaseModal message="Tu compra se ha realizado con éxito" />
    </Layout>
  );
};

export default ShoppingCartPage;
