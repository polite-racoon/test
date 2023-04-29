import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, IconButton, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Layout } from '../../components/layouts';
import { DeleteList } from '../../components/ui';

const AdminDashboard: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Box display="flex" alignItems={'center'} flexDirection="column">
        <Box sx={{ margin: '1rem' }}>
          <Typography variant="h6">Administrador</Typography>
        </Box>
        <IconButton onClick={() => router.push('/admin-dashboard/uploader')}>
          <CameraAltIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>
        <br />
        <DeleteList />
      </Box>
    </Layout>
  );
};

export default AdminDashboard;
