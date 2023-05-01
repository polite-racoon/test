import { useContext } from 'react';
import Image from 'next/image';
import { Box, Card, Grid, Modal, Typography } from '@mui/material';

import { UIContext } from '../../context/ui';
import { ReservasContext } from '../../context/reservas';
import { info } from 'console';

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
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
};

export const AddToCartModal = () => {
  const { addToCartModalOpen: open, closeAddToCartModal } =
    useContext(UIContext);
  const { reservas } = useContext(ReservasContext);
  const itemData = reservas[reservas.length - 1];

  return (
    <Modal
      open={open}
      onClose={closeAddToCartModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ pb: 2 }}
        >
          Producto agragado al carrito
        </Typography>
        <Card sx={{ boxShadow: 24 }}>
          <Grid container>
            <Grid item xs={6}>
              <Image
                src={itemData?.imageUrl}
                height={200}
                width={146}
                alt={'imagen del producto'}
              />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
              <Typography>{itemData?.title}</Typography>
              <Typography>${itemData.price}</Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Modal>
  );
};
