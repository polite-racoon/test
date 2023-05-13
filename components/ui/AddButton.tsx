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
  const { addReserva, itemQuantityInReservas } = useContext(ReservasContext);
  const { openAddToCartModal, openStockWarningModal } = useContext(UIContext);
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
        const currentQuantity = itemQuantityInReservas(itemData.id);
        if (itemData.stock > currentQuantity) {
          const reserva = {
            ...itemData,
            quantity: currentQuantity + 1,
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
