import { useContext } from 'react';
import { NextPage } from 'next';

import { Layout } from '../components/layouts';
import { ProductosContext } from '../context/productos';

const Galletas: NextPage = () => {
  const { galletas } = useContext(ProductosContext);
  console.log(galletas);
  return (
    <Layout>
      <p>galletas</p>
    </Layout>
  );
};

export default Galletas;
