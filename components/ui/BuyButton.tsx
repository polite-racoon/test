import { useContext } from 'react';
import { Button } from '@mui/material';

import firebase from '../../firebase/client';
import { useAuth } from '../../context/auth';
import { ReservasContext } from '../../context/reservas';
import { ProductosContext } from '../../context/productos';

interface BuyButtonProps {
  disabled: boolean;
  // reservas: (Reserva | undefined)[];
}

export const BuyButton = ({ disabled }: BuyButtonProps) => {
  const { reservasById, reset } = useContext(ReservasContext);
  const { productsByIdObj } = useContext(ProductosContext);
  const reservasIds = Object.keys(reservasById);
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
    const addCompraResult = await db
      .collection('compras')
      .add({ user: userId, compras: reservasById });
    console.log(addCompraResult);
    reset();
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
