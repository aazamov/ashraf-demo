import classes from './testi.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testi() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.test}>
      <h1>Testimonials</h1>
      <Slider  {...settings} className={classes.slider_of}>
        <div className={classes.slide}>
          <div className={classes.img}></div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <h4>Kyle McDonald</h4>
        </div>
        <div className={classes.slide}>
          <div className={classes.img2}></div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <h4>Robert Aguilar</h4>
        </div>
        <div className={classes.slide}>
          <div className={classes.img3}></div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <h4>John Smith</h4>
        </div>
      </Slider>
    </div>
  );
}

export default Testi;
