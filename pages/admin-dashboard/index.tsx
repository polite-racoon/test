import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, IconButton, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Layout } from '../../components/layouts';
import { DeleteList } from '../../components/ui';

const AdminDashboard: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Box sx={{ margin: '1rem' }}>
        <Typography variant="h6">Administrador</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}
      >
        <IconButton onClick={() => router.push('/admin-dashboard/uploader')}>
          <CloudUploadIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>
        <IconButton onClick={() => router.push('/admin-dashboard/orders')}>
          <AssignmentIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>
      </Box>
      <br />
      <DeleteList />
    </Layout>
  );
};

export default AdminDashboard;
