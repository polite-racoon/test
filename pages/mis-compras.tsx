import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { useAuth } from '../context/auth';
import { Orden } from '../interfaces/orden';
import { green } from '@mui/material/colors';
import firebase from '../firebase/client';

// export async function getServerSideProps() {}

export const MisCompras: NextPage = () => {
  const [ordenes, setOrdenes] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getOrdenes = async () => {
      try {
        // const response = await fetch('/api/ordenes', {
        //   method: 'POST',
        //   body: JSON.stringify({ user }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
        // const { data, error } = await response.json();
        // if (error) return;
        // data.sort((a: Orden, b: Orden) => b.date - a.date);
        // setOrdenes(data);
        const db = firebase.firestore();
        db.collection('orders')
          .where('user', '==', user.uid)
          .get()
          .then((qs) => {
            const orders: any = [];
            qs.forEach((doc) => {
              orders.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setOrdenes(orders);
          });
      } catch {
        return;
      }
      setLoading(false);
    };

    getOrdenes();
  }, [user]);

  return (
    <Layout>
      <Typography variant="h6">Mis Compras</Typography>
      {loading ? (
        <Box sx={{ padding: '4rem' }}>
          <CircularProgress disableShrink color="info" />
        </Box>
      ) : ordenes.length === 0 ? (
        <Box sx={{ padding: '4rem' }}>
          <Typography variant="body2">No se encontraron compras</Typography>
        </Box>
      ) : (
        ordenes.map((orden: Orden, i) => {
          let total = 0;
          return (
            <Paper
              key={orden.id}
              sx={{
                padding: '1rem',
                margin: '1rem 0',
                minWidth: '60%',
              }}
            >
              <Typography sx={{ fontSize: '0.5rem' }}>{orden.id}</Typography>
              {i === 0 && (
                <Typography sx={{ fontSize: '0.5rem', color: green[700] }}>
                  Última compra
                </Typography>
              )}
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
                        width={64}
                        height={64}
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
        })
      )}
    </Layout>
  );
};

export default MisCompras;
