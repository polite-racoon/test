import { useContext } from 'react';

import { ReservasContext } from '../../../context/reservas';
import { ProductosContext } from '../../../context/productos';
import { UIContext } from '../../../context/ui';
import { Button } from '@mui/material';
import firebase from '../../../firebase/client';
import { useAuth } from '../../../context/auth';

interface Props {
  phone: string;
  disabled: boolean;
}

export function SavePhoneButton({ phone, disabled }: Props) {
  const { reservasById, reset } = useContext(ReservasContext);
  const { productsByIdObj } = useContext(ProductosContext);
  const reservasIds = Object.keys(reservasById);
  const { showPurchaseModal, showPhoneModal } = useContext(UIContext);
  const { user } = useAuth();

  const savePhone = async () => {
    if (!user) {
      showPhoneModal(false);
      return;
    }
    const db = firebase.firestore();
    try {
      await db.collection('phones').add({ phone, uid: user.uid });
    } catch (error) {
      console.log(error);
      alert('Error al guardar teléfono');
      return;
    }
    try {
      const updatePromises = reservasIds.map((id) => {
        const product = productsByIdObj[id];
        db.collection('productos')
          .doc(id)
          .update({ stock: product!.stock - reservasById[id]!.quantity });
      });
      await Promise.all(updatePromises);
      const date = Date.now();
      await db.collection('orders').add({
        user: user.uid,
        items: reservasById,
        state: 'En proceso',
        date,
      });
      reset();
      showPhoneModal(false);
      showPurchaseModal(true);
    } catch (error) {
      console.log(error);
      alert('Error al procesar compra');
      showPhoneModal(false);
    }
  };

  return (
    <Button
      color="info"
      variant="outlined"
      sx={{
        textTransform: 'none',
      }}
      onClick={savePhone}
      disabled={disabled}
    >
      Enviar
    </Button>
  );
}
