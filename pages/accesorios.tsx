import { useContext } from 'react';
import { NextPage } from 'next';

import { Layout } from '../components/layouts';
import { ProductosContext } from '../context/productos';

const Accesorios: NextPage = () => {
  const { accesorios } = useContext(ProductosContext);
  console.log(accesorios);

  return (
    <Layout>
      <p>accseorios</p>
    </Layout>
  );
};

export default Accesorios;
