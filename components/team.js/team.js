import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import classes from './team.module.css';
import Link from 'next/link'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  return (
    <div>
      <div data-aos="fade-up" className={classes['team']}>
        <h1>Our Team</h1>
        <p className={classes.txt}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </p>
        <div data-aos="fade-up" className={classes['cards']}>
          <div className={classes['card']}>
            <div className={classes.img}>
              <div className={classes.blue}>
                
                <Link href='https://www.facebook.com/'><FacebookIcon className={classes.icons_face} /></Link>
                <Link href='https://twitter.com/?lang=ru'><TwitterIcon className={classes.icon} /></Link>
                <Link href='https://www.instagram.com/'><InstagramIcon className={classes.icons_face} /></Link>
                
                
              </div>
            </div>
            <div className={classes.image}></div>

            <h3>Cloe Marena</h3>
            <h4>PRESIDENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi
              accusantium repellat.
            </p>
          </div>
          <div data-aos="fade-up" className={classes['card']}>
            <div className={classes.img2}>
              <div className={classes.blue2}>
                
                <Link href='https://www.facebook.com/'><FacebookIcon className={classes.icons_face} /></Link>
                <Link href='https://twitter.com/?lang=ru'><TwitterIcon className={classes.icon} /></Link>
                <Link href='https://www.instagram.com/'><InstagramIcon className={classes.icons_face} /></Link>
                
                
              </div>
            </div>
            <div className={classes.image}></div>

            <h3>Cloe Marena</h3>
            <h4>PRESIDENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi
              accusantium repellat.
            </p>
          </div>
          <div className={classes.card_3}>
          <div data-aos="fade-up" className={classes['card']}>
            <div className={classes.img3}>
              <div className={classes.blue3}>
                
                <Link href='https://www.facebook.com/'><FacebookIcon className={classes.icons_face} /></Link>
                <Link href='https://twitter.com/?lang=ru'><TwitterIcon className={classes.icon} /></Link>
                <Link href='https://www.instagram.com/'><InstagramIcon className={classes.icons_face} /></Link>
                
                
              </div>
            </div>
            <div className={classes.image}></div>

            <h3>Cloe Marena</h3>
            <h4>PRESIDENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi
              accusantium repellat.
            </p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Team;
