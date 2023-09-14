import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

export default function OrderStateSelector({ state }) {
  const onInputChange = (e) => {
    setOrderState(e.target.value);
  };
  const [orderState, setOrderState] = useState(state || 'En proceso');

  const updateState = () => {};

  return (
    <Box
      sx={{
        paddingTop: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FormControl color="secondary">
        <InputLabel sx={{ fontSize: '0.7rem' }} id="estado">
          Estado
        </InputLabel>
        <Select
          sx={{ fontSize: '0.7rem' }}
          value={orderState}
          label="Estado"
          onChange={onInputChange}
        >
          <MenuItem sx={{ fontSize: '0.7rem' }} value={'En proceso'}>
            En proceso
          </MenuItem>
          <MenuItem sx={{ fontSize: '0.7rem' }} value={'Entregado'}>
            Entregado
          </MenuItem>
          <MenuItem sx={{ fontSize: '0.7rem' }} value={'Anulado'}>
            Anulado
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        disableElevation
        color="info"
        size="small"
        sx={{
          textTransform: 'none',
          paddingX: '2rem',
        }}
        endIcon={<UpdateIcon />}
        onClick={updateState}
      >
        Actualizar estado
      </Button>
    </Box>
  );
}
