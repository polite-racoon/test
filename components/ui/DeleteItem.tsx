import Image from 'next/legacy/image';
import { Box, Card, Typography } from '@mui/material';
import { DeleteButton } from './DeleteButton';

interface DeleteItemProps {
  title: string;
  imageUrl: string;
  price: number;
  id: string;
  priority?: boolean;
}

export const DeleteItem = ({
  title,
  imageUrl,
  price,
  id,
  priority,
}: DeleteItemProps) => {
  return (
    <Card sx={{ height: '28rem', position: 'relative' }}>
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
        {/* <Stars /> */}
      </Box>
      <Box display="flex" justifyContent="center">
        <DeleteButton id={id} imageUrl={imageUrl} />
      </Box>
    </Card>
  );
};
