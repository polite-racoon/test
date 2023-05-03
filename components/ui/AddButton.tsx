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
  const { addReserva, quantityInReservas } = useContext(ReservasContext);
  const { openAddToCartModal, openStockWarningModal } = useContext(UIContext);
  const router = useRouter();

  console.log(quantityInReservas(itemData.id));
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
        if (itemData.stock > quantityInReservas(itemData.id)) {
          const reserva = {
            ...itemData,
            quantity: 1,
            stock: null,
          };

          addReserva(reserva);
          if (openModal) openAddToCartModal();
          if (goToCart) router.push('/shopping-cart');
        } else {
          openStockWarningModal();
        }
      }}
    >
      Agregar
    </Button>
  );
};
