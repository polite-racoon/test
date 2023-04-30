import { useState } from 'react';
import Image from 'next/legacy/image';
import { Box, Button, Card, Typography } from '@mui/material';
import { Stars } from './Stars';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteItem = ({ title, imageUrl, price, id, onDelete }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Card sx={{ height: '28rem', position: 'relative' }}>
      <Image src={imageUrl} width={680} height={1020} alt="" />
      <Box sx={{ padding: '0.5rem' }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h6" sx={{ color: 'gray' }}>
          ${price}
        </Typography>
        {/* <Stars /> */}
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          variant="outlined"
          disableElevation
          color="info"
          size="small"
          sx={{ textTransform: 'none', position: 'absolute', bottom: '0.5rem' }}
          endIcon={<DeleteIcon />}
          onClick={() => onDelete(id, imageUrl, setDisabled)}
          disabled={disabled}
        >
          Borrar
        </Button>
      </Box>
    </Card>
  );
};
