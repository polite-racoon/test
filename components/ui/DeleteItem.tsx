import { useState, ChangeEvent } from 'react';
import Image from 'next/legacy/image';
import { Box, Card, TextField, Typography } from '@mui/material';
import { DeleteButton, UpdateButton } from './buttons';

interface DeleteItemProps {
  title: string;
  imageUrl: string;
  landscapeImgUrl: string;
  price: number;
  id: string;
  stock: number;
  priority?: boolean;
}

export const DeleteItem = ({
  title,
  imageUrl,
  landscapeImgUrl,
  price,
  id,
  stock,
  priority,
}: DeleteItemProps) => {
  const [newStock, setNewStock] = useState(String(stock));

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewStock(e.target.value);
  };

  return (
    <Card sx={{ height: '32rem', position: 'relative' }}>
      <Image
        src={imageUrl}
        width={680}
        height={1020}
        alt=""
        priority={priority}
      />
      <Box sx={{ padding: '0.5rem' }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h6" sx={{ color: 'gray' }}>
          ${price}
        </Typography>
      </Box>
      <Box display="flex" alignItems={'center'} flexDirection={'column'}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          sx={{ mx: '0.5rem' }}
          value={newStock}
          onChange={handleChange}
        />
        <UpdateButton
          id={id}
          newStock={newStock}
          disabled={newStock === String(stock)}
        />
      </Box>
      {/* este box evita que delete button se active al presionar UpdateButton estando deshabilitado */}
      <Box sx={{ height: '1.5rem' }} onClick={() => {}}></Box>
      <Box display="flex" justifyContent={'center'}>
        <DeleteButton
          id={id}
          imageUrl={imageUrl}
          landscapeImgUrl={landscapeImgUrl}
        />
      </Box>
    </Card>
  );
};
