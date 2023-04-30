import { useContext } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { ProductosContext } from '../../../context/productos';
import { Layout } from '../../../components/layouts';

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;

  // dynamic import. ProductContext exposes each product individually by id
  const { [id]: product = {} } = useContext(ProductosContext);

  const { category, title, description, imageUrl, landscapeImgUrl, price } =
    product;

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Subtitle>${price}</Card.Subtitle>
            <Button variant="dark">Agregar al carrito</Button>
          </Card.Body>
          <Card.Footer>
            <Card.Link>Ver mas {category}</Card.Link>
          </Card.Footer>
        </Card>
      </div>
    </Layout>
  );
}
