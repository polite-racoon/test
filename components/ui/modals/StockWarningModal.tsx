import { useContext } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { Logo } from '../Logo';

import { UIContext } from '../../../context/ui';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export const StockWarningModal = () => {
  const { stockWarningModalOpen: open, closeStockWarningModal } =
    useContext(UIContext);

  return (
    <Modal
      open={open}
      onClose={closeStockWarningModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Logo />
        <Typography
          id="modal-modal-title"
          variant="body1"
          component="h2"
          sx={{ pb: 2, textAlign: 'justify' }}
        >
          Este producto ya se encuentra en el carrito. No se pueden agregar mas
          unidades debido a que se ha alcanzado el stock disponible.
        </Typography>
      </Box>
    </Modal>
  );
};
