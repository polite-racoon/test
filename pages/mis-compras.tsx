import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Box, Paper, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { useAuth } from '../context/auth';
import { Orden } from '../interfaces/orden';

// export async function getServerSideProps() {}

export const MisCompras: NextPage = () => {
  const [ordenes, setOrdenes] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getOrdenes = async () => {
      try {
        const response = await fetch('/api/ordenes', {
          method: 'POST',
          body: JSON.stringify({ user }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { data, error } = await response.json();
        if (error) return;
        data.sort((a: Orden, b: Orden) => a.date - b.date);
        setOrdenes(data);
      } catch {
        return;
      }
    };

    getOrdenes();
  }, [user]);

  return (
    <Layout>
      <Box>
        <Typography variant="h6">Mis Compras</Typography>
        {ordenes.map((orden: Orden) => {
          let total = 0;
          return (
            <Paper
              key={orden.id}
              sx={{
                padding: '1rem',
                margin: '1rem',
              }}
            >
              <Typography sx={{ fontSize: '0.5rem' }}>{orden.id}</Typography>
              <Box>
                {Object.keys(orden.items).map((item) => {
                  const { id, price, quantity, title, imageUrl } =
                    orden.items[item];
                  total += price * quantity;
                  return (
                    <Box
                      key={id}
                      sx={{
                        display: 'flex',
                        border: '1px solid lightgray',
                        borderRadius: '0.5rem',
                        padding: '0.5rem 1rem',
                        margin: '0.5rem 0',
                      }}
                    >
                      <Image
                        src={imageUrl}
                        width={50}
                        height={60}
                        alt={title}
                        style={{ paddingRight: '1rem' }}
                      />
                      <Box>
                        <Typography sx={{ fontSize: '0.7rem' }}>
                          {title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.7rem' }}>
                          precio unitario: {price}
                        </Typography>
                        <Typography sx={{ fontSize: '0.7rem' }}>
                          cantidad: {quantity}
                        </Typography>
                        <Typography sx={{ fontSize: '0.7rem' }}>
                          subtotal: {price * quantity}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
                <Typography sx={{ fontSize: '0.7rem' }}>
                  total: {total}
                </Typography>
                <Typography sx={{ fontSize: '0.7rem' }}>
                  estado: {orden.state}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Layout>
  );
};

export default MisCompras;
