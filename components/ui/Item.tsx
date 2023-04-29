import Image from 'next/legacy/image';
import { Box, Card, Typography } from '@mui/material';
import { Stars } from './Stars';
import { MyButton } from './MyButton';
import { Producto } from '../../interfaces';

export const Item = ({
  itemData,
  index,
}: {
  itemData: Producto;
  index: number;
}) => {
  const { title, price, imageUrl } = itemData;

  return (
    <Card
      sx={{ height: '28rem', backgroundColor: '#eee', position: 'relative' }}
    >
      <Image
        src={imageUrl}
        width={680}
        height={1020}
        alt=""
        priority={index < 2}
      />
      <Box sx={{ padding: '0.5rem' }}>
        <Typography variant="subtitle2">{title}</Typography>
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
        <Stars />
        <MyButton itemData={itemData} />
      </Box>
    </Card>
  );
};
