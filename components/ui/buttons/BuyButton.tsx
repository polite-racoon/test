import { useContext } from 'react';
import { Button } from '@mui/material';

import firebase from '../../../firebase/client';
import { useAuth } from '../../../context/auth';
import { ReservasContext } from '../../../context/reservas';
import { ProductosContext } from '../../../context/productos';
import { UIContext } from '../../../context/ui';

interface BuyButtonProps {
  disabled: boolean;
  // reservas: (Reserva | undefined)[];
}

export const BuyButton = ({ disabled }: BuyButtonProps) => {
  const { reservasById, reset } = useContext(ReservasContext);
  const { productsByIdObj } = useContext(ProductosContext);
  const reservasIds = Object.keys(reservasById);
  const { showPurchaseModal } = useContext(UIContext);

  const { user } = useAuth();
  const userId = user?.uid;
  console.log(userId);

  const handleBuy = async () => {
    const db = firebase.firestore();
    const updatePromises = reservasIds.map((id) => {
      const product = productsByIdObj[id];
      db.collection('productos')
        .doc(id)
        .update({ stock: product!.stock - reservasById[id]!.quantity });
    });
    await Promise.all(updatePromises);
    const date = Date.now();

    await db.collection('orders').add({
      user: userId,
      items: reservasById,
      state: 'En proceso',
      date,
    });
    reset();
    showPurchaseModal(true);
  };

  return (
    <Button
      color="info"
      variant="outlined"
      sx={{
        textTransform: 'none',
        paddingX: '2rem',
      }}
      disabled={disabled}
      onClick={handleBuy}
    >
      Comprar
    </Button>
  );
};
