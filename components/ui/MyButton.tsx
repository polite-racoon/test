import { Button } from '@mui/material';
import { useContext } from 'react';
import { ReservasContext } from '../../context/reservas';
import { UIContext } from '../../context/ui';
import { Producto } from '../../interfaces';
import { ShoppingCartOutlined } from '@mui/icons-material';

export const MyButton = ({ itemData }: { itemData: Producto }) => {
  const { addReserva } = useContext(ReservasContext);
  const { openAddToCartModal } = useContext(UIContext);

  return (
    <Button
      variant="outlined"
      disableElevation
      color="info"
      size="small"
      sx={{
        textTransform: 'none',
        paddingX: '2rem',
      }}
      endIcon={<ShoppingCartOutlined />}
      onClick={(e) => {
        e.preventDefault();
        addReserva(itemData);
        openAddToCartModal();
      }}
    >
      Agregar
    </Button>
  );
};
