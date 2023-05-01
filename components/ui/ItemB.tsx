import { useContext } from 'react';
import Image from 'next/legacy/image';
import { Paper, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ReservasContext } from '../../context/reservas';

export const ItemB = ({ reserva }: any) => {
  const { title, price, imageUrl, id } = reserva;
  const { deleteReserva } = useContext(ReservasContext);

  return (
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: '0.5rem' }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Image src={imageUrl} width={680} height={1020} alt="" />
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>{title}</Typography>
            <Typography>${price}</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              size="small"
              edge="end"
              onClick={() => deleteReserva(id)}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
