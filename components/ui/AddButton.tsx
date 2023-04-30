import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';

import { ReservasContext } from '../../context/reservas';
import { UIContext } from '../../context/ui';
import { Producto } from '../../interfaces';

export const AddButton = ({
  itemData,
  openModal,
  goToCart,
}: {
  itemData: Producto;
  openModal?: boolean;
  goToCart?: boolean;
}) => {
  const { addReserva } = useContext(ReservasContext);
  const { openAddToCartModal } = useContext(UIContext);
  const router = useRouter();

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
        if (openModal) openAddToCartModal();
        if (goToCart) router.push('/shopping-cart');
      }}
    >
      Agregar
    </Button>
  );
};
