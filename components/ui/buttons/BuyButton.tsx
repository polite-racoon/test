import { Dispatch, SetStateAction, useContext } from 'react';
import { Button } from '@mui/material';

import { useAuth } from '../../../context/auth';
import { UIContext } from '../../../context/ui';
import firebase from '../../../firebase/client';

interface BuyButtonProps {
  disabled: boolean;
  setPhone: Dispatch<SetStateAction<string>>;
  setRepeatedPhone: Dispatch<SetStateAction<string>>;
  // reservas: (Reserva | undefined)[];
}

export const BuyButton = ({
  disabled,
  setPhone,
  setRepeatedPhone,
}: BuyButtonProps) => {
  const { showPhoneModal, showSigninModal } = useContext(UIContext);
  const { user } = useAuth();
  const db = firebase.firestore();

  const handleBuy = async () => {
    if (!user) {
      showSigninModal(true);
      return;
    }

    const userData = await db.collection('phones').doc(user.uid).get();

    setPhone(userData.data()?.phone || '');
    setRepeatedPhone(userData.data()?.phone || '');
    showPhoneModal(true);
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
