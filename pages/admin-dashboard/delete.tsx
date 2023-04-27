import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { DeleteList } from '../../components/ui';
export const DeletePage: NextPage = () => {
  return (
    <Layout>
      <Box display={'flex'} justifyContent={'center'} sx={{ padding: '1rem' }}>
        <Typography variant="h6">Borrar productos</Typography>
      </Box>
      <DeleteList />
    </Layout>
  );
};

export default DeletePage;
