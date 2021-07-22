import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { quotesData } from '../data';
import Quote from './Quote';
import Slider from 'react-slick';

const Carousel = () => {
  let settings = {
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {quotesData.map((quote) => {
        const { id, portrait, name, userQuote } = quote;
        return (
          <Quote
            key={id}
            portrait={portrait}
            name={name}
            userQuote={userQuote}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
