import { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Card, Grid, Modal, Typography, Button } from '@mui/material';
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
  backgroundColor: '#f7f7ff',
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
};

export const AddToCartModal = () => {
  const router = useRouter();
  const { addToCartModalOpen: open, closeAddToCartModal: close } =
    useContext(UIContext);
  const { reservas } = useContext(ReservasContext);
  const itemData = reservas[reservas.length - 1];

  return (
    <Modal
      open={open}
      onClose={close}
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

        <Card>
          <Grid container sx={{ borderBottom: '1px solid #f7f7ff' }}>
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
          <Box
            display={'flex'}
            justifyContent={'space-around'}
            padding={'1rem'}
          >
            {/* <Button
              variant="outlined"
              disableElevation
              color="info"
              size="small"
              sx={{
                textTransform: 'none',
                paddingX: '1.25rem',
              }}
              onClick={(e) => {
                close();
              }}
            >
              Cerrar
            </Button> */}
            <Button
              variant="outlined"
              disableElevation
              color="info"
              size="small"
              sx={{
                textTransform: 'none',
              }}
              onClick={(e) => {
                close();
                router.push('/shopping-cart');
              }}
            >
              Ver carrito
            </Button>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};
