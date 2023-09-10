import Image from 'next/legacy/image';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselFade = ({ elements, fade = true }) => {
  return (
    <Carousel fade={fade}>
      {elements.map((element, i) => {
        return (
          <Carousel.Item key={element.id}>
            <Image
              className="d-block w-100"
              src={element.landscapeImgUrl}
              alt={element.title}
              width={557}
              height={418}
              priority={i === 0}
            />
            <Carousel.Caption>
              <p>{element.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
