import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export const Stars = () => {
  return (
    <Box display="flex" alignItems="center">
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Image src="/star.png" width={10} height={10} alt="" />
      <Typography sx={{ fontSize: '10px', paddingLeft: '5px' }}>
        {' '}
        (7)
      </Typography>
    </Box>
  );
};
