import { useContext } from 'react';
import Image from 'next/legacy/image';
import {
  Paper,
  Grid,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ReservasContext } from '../../context/reservas';
import { ProductosContext } from '../../context/productos';
import { Reserva } from '../../interfaces';

interface ShoppinCartProps {
  reserva: Reserva;
  priority: boolean;
}

export const ShoppingCartItem = ({ reserva, priority }: ShoppinCartProps) => {
  const { title, price, imageUrl, id, quantity, updatedByStockChange } =
    reserva;
  const { deleteReserva, updateQuantity } = useContext(ReservasContext);
  const { getStockById } = useContext(ProductosContext);
  const stock = getStockById(id);

  const menuItems = [];
  for (let i = 1; i <= stock; i++) {
    const value = String(i);
    menuItems.push(
      <MenuItem key={value} value={value}>
        {value}
      </MenuItem>
    );
  }

  const handleChange = (e: SelectChangeEvent<number>) => {
    updateQuantity(id, Number(e.target.value));
  };

  return (
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: '0.5rem' }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Image
              src={imageUrl}
              width={274}
              height={365}
              alt=""
              priority={priority}
            />
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '1rem',
            }}
          >
            <Typography>{title}</Typography>
            <Typography>${price}</Typography>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">cantidad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantity}
                label="cantidad"
                onChange={handleChange}
              >
                {menuItems}
              </Select>
              {/* </Box> */}
            </FormControl>
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
        {updatedByStockChange && (
          <Typography sx={{ fontSize: '0.6rem' }}>
            Tu reserva ha sido modificada debido a cambios en el stock
            disponible.
          </Typography>
        )}
      </Paper>
    </Grid>
  );
};
