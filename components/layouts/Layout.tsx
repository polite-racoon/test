import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, Sidebar, Footer } from '../ui';

interface Props {
  title?: string;
  children: any;
}

export const Layout: FC<Props> = ({ title = 'tiendita nomada', children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box
        sx={{
          padding: '0.6rem',
          backgroundColor: '#f0f0ff',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {children}
        <br></br>
        <br></br>
        <br></br>
      </Box>
      <Footer />
    </Box>
  );
};
