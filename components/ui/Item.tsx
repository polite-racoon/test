import Image from 'next/legacy/image';
import { Box, Card, Typography } from '@mui/material';
import { AddButton } from './buttons/AddButton';
import { Producto } from '../../interfaces';

export const Item = ({
  itemData,
  index,
}: {
  itemData: Producto;
  index: number;
}) => {
  const { title, price, imageUrl, stock } = itemData;

  return (
    <Card sx={{ position: 'relative', paddingBottom: '6rem' }}>
      <Image
        src={imageUrl}
        width={680}
        height={1020}
        alt=""
        priority={index < 2}
      />
      <Box sx={{ padding: '0.5rem' }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {`${stock} ${stock > 1 ? 'unidades' : 'unidad'}`}
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '0rem',
          padding: '0.5rem',
        }}
      >
        <Typography variant="h6" sx={{ color: 'gray' }}>
          ${price}
        </Typography>
        {/* <Stars /> */}
        <AddButton itemData={itemData} openModal />
      </Box>
    </Card>
  );
};
