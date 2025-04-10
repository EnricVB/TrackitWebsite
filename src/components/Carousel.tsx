
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
  content: (string | number | React.ReactNode)[];
}

const Carousel: React.FC<CarouselProps> = ({ content }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: "linear"    
  };

  return (
    <div className='carouselContainer'>
      <Slider {...settings}>
        {content.map((item, index) => (
          <div key={index} className='carouselContent'>
            {typeof item === "string" || typeof item === "number" ? 
              (<h3>{item}</h3>) : (item)
            }
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;