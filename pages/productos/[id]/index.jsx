import { useContext } from 'react';
import { useRouter } from 'next/router';
import { ProductosContext } from '../../../context/productos';

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;

  // dynamic import. ProductContext exposes each product individually by id
  const { [id]: product = {} } = useContext(ProductosContext);

  const { category, title, description, imageUrl, landscapeImgUrl, price } =
    product;

  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
