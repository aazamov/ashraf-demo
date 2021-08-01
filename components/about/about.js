import Image from 'next/image';
import classes from './about.module.css';
import img from '../../public/img/about.svg';
import Link from 'next/link'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  return (
    <div className={classes.header_of}>
 <div className={classes.head}>
      <div className={classes.about_us}>
        <h1>About Us</h1>
        <div className={classes.about}>
          <div data-aos="fade-up-right" className={classes.img}>
            <Image src={img} alt='image' width='500' />
          </div>
          <div data-aos="fade-up-left"  className={classes['texts']}>
            <h3>Our Mission</h3>
            <p>
              Eos cumque optio dolores excepturi rerum temporibus magni
              recusandae eveniet, totam omnis consectetur maxime quibusdam
              expedita dolorem dolor nobis dicta labore quaerat esse magnam
              unde, aperiam delectus! At maiores, itaque.
            </p>
            <h4>
              <span>✓</span> Laborum enim quasi at modi
            </h4>
            <h4>
              <span>✓</span> Ad at tempore
            </h4>
            <h4>
              <span>✓</span> Loore quaerat esse
            </h4>
            <Link href='/contact'>
            <button>Learn More</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default About;
