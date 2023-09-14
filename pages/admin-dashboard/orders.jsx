import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';
import { useAuth } from '../../context/auth';
import firebase from '../../firebase/client';
import OrdersStateSelector from '../../components/ui/OrderStateSelector';

export const Orders = () => {
  const [ordenes, setOrdenes] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrdenes = async () => {
      try {
        const db = firebase.firestore();
        const qs = await db.collection('orders').get();
        const rawOrders = [];
        qs.forEach((doc) => {
          rawOrders.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        // devuelve [{uid: 'asdf'},...] requerido por firebase para buscar usuarios
        const uids = rawOrders.map((order) => ({
          uid: order.user,
        }));

        // filtra los repetidos
        const uniqueUids = [...new Set(uids)];

        // solicita la informacion de los usuarios
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ user, uids: uniqueUids }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { data, error } = await response.json();
        console.log(data, error);
        if (error) throw new Error(error);

        const usersById = data.users.reduce(
          (acc, el) => ({
            ...acc,
            [el.uid]: el,
          }),
          {}
        );

        // agrega email y nombre de los usuarios a las ordenes
        const orders = rawOrders.map((rawOrder) => {
          return {
            ...rawOrder,
            email: usersById[rawOrder.user].email,
            name: usersById[rawOrder.user].displayName,
            emailVerified: usersById[rawOrder.user].emailVerified,
          };
        });

        // solicita los telefonos de los usuarios
        const qs2 = await db.collection('phones').get();
        const phonesById = {};
        qs2.forEach((doc) => {
          phonesById[doc.id] = doc.data().phone;
        });

        //agrega los telefonos de los usuarios a las ordenes
        const ordersWithPhone = orders.map((order) => {
          return {
            ...order,
            phone: phonesById[order.user],
          };
        });
        setOrdenes(ordersWithPhone);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getOrdenes();
  }, [user]);

  return (
    <Layout>
      <Typography variant="h6">Ordenes</Typography>
      {loading ? (
        <Box sx={{ padding: '4rem' }}>
          <CircularProgress disableShrink color="info" />
        </Box>
      ) : ordenes.length === 0 ? (
        <Box sx={{ padding: '4rem' }}>
          <Typography variant="body2">No se encontraron órdenes</Typography>
        </Box>
      ) : (
        ordenes.map((orden, i) => {
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
              <Typography sx={{ fontSize: '0.5rem' }}>
                id: {orden.id}
              </Typography>
              <Typography variant="body2">usuario: {orden.name} </Typography>
              <Typography variant="body2">email: {orden.email}</Typography>
              {orden.emailVerified ? (
                <Typography sx={{ color: 'green' }}>
                  Email verificado
                </Typography>
              ) : (
                <Typography sx={{ color: 'darkred' }}>
                  Email sin verificar
                </Typography>
              )}
              <Typography variant="body2">teléfono: {orden.phone}</Typography>
              <Typography variant="body2">
                fecha: {new Date(orden.date).toLocaleDateString()}
              </Typography>
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
                <OrdersStateSelector />
              </Box>
            </Paper>
          );
        })
      )}
    </Layout>
  );
};

export default Orders;
