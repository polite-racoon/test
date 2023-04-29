import { useContext } from 'react';
import Image from 'next/legacy/image';
import Carousel from 'react-bootstrap/Carousel';

import { ProductosContext } from '../../context/productos';

export const CarouselFade = () => {
  const { productos } = useContext(ProductosContext);
  const productsCopy = [...productos];
  const productsOrderedByDateDesc = productsCopy.sort(
    (a, b) => b.date - a.date
  );
  const lastProducts = productsOrderedByDateDesc.slice(0, 3);
  return (
    <Carousel fade>
      {lastProducts.map((product, i) => {
        return (
          <Carousel.Item key={product.id}>
            <Image
              className="d-block w-100"
              src={product.imageUrl}
              alt={product.title}
              width={600}
              height={400}
              priority={i === 0}
            />
            <Carousel.Caption>
              <p>{product.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
