import { useContext } from 'react';
import Image from 'next/image';
import { Box, Card, Grid, Modal, Typography } from '@mui/material';
import { Logo } from '../Logo';
import CheckIcon from '@mui/icons-material/Check';
import { UIContext } from '../../../context/ui';
import { ReservasContext } from '../../../context/reservas';

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
        <Logo />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '1rem',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="body1"
            component="h2"
            sx={{ textAlign: 'center' }}
          >
            Producto agragado al carrito
          </Typography>
          <CheckIcon fontSize="small" />
        </Box>

        <Card sx={{ boxShadow: 24 }}>
          <Grid container>
            <Grid item xs={6}>
              <Image
                src={itemData?.imageUrl || ''}
                height={200}
                width={146}
                alt={'imagen del producto'}
              />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
              <Typography>{itemData?.title}</Typography>
              <Typography>${itemData?.price}</Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Modal>
  );
};
