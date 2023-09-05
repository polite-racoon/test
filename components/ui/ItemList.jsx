import { useContext } from 'react';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { Item } from './Item';
import { ProductosContext } from '../../context/productos';

export const ItemList = () => {
  const { productosDisponibles } = useContext(ProductosContext);

  return (
    <Grid container spacing={1.3}>
      {productosDisponibles.map((producto, i) => {
        const { id } = producto;
        return (
          <Grid item xs={6} md={4} key={id}>
            <Link href={`/productos/${producto.id}`}>
              <Item itemData={producto} index={i} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};
