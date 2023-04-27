import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export const Stars = () => {
  return (
    <Box display="flex" alignItems="center" sx={{ paddingBottom: '0.5rem' }}>
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Typography sx={{ fontSize: '0.5rem', paddingLeft: '5px' }}>
        {' '}
        (7)
      </Typography>
    </Box>
  );
};
