import { useContext } from 'react';
import { Button } from '@mui/material';

import { useAuth } from '../../../context/auth';
import { UIContext } from '../../../context/ui';

interface BuyButtonProps {
  disabled: boolean;
  // reservas: (Reserva | undefined)[];
}

export const BuyButton = ({ disabled }: BuyButtonProps) => {
  const { showPhoneModal } = useContext(UIContext);

  const handleBuy = async () => {
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
