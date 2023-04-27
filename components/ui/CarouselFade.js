import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/legacy/image';

export const CarouselFade = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="http://placekitten.com/600/400"
          alt="First slide"
          width={600}
          height={400}
          priority
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="http://placekitten.com/602/400"
          alt="Second slide"
          width={600}
          height={400}
        />

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="http://placekitten.com/601/400"
          alt="Third slide"
          width={600}
          height={400}
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

// import Carousel from 'react-material-ui-carousel';
// import { CarouselItem } from './CarouselItem';

// export const MyCarousel = (props) => {
//   const items = [
//     {
//       name: 'Random Name #1',
//       description: 'Probably the most random thing you have ever seen!',
//     },
//     {
//       name: 'Random Name #2',
//       description: 'Hello World!',
//     },
//   ];

//   return (
//     <Carousel>
//       {items.map((item, i) => (
//         <CarouselItem key={i} item={item} />
//       ))}
//     </Carousel>
//   );
// };
