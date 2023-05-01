import { useContext } from 'react';
import { NextPage } from 'next';

import { Layout } from '../components/layouts';
import { ProductosContext } from '../context/productos';

const Plantas: NextPage = () => {
  const { plantas } = useContext(ProductosContext);
  console.log(plantas);

  return (
    <Layout>
      <p>plantas</p>
    </Layout>
  );
};

export default Plantas;
