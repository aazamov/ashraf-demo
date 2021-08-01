import Link from 'next/link';
import classes from './navbar.module.css';import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  return (
    <div className={classes.nav}>
      <div className={classes['navbar']}>
        <h1>
          imgine<span>.</span>
        </h1>
        <ul className={classes.list}>
          <li className={classes.link}>
            <Link href='/'>Home</Link>
          </li>
          <li className={classes.link}>
            <Link href='/features'>Features</Link>
          </li>
          <li className={classes.link}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={classes.link}>
            <Link href='/testi'>Testimonials</Link>
          </li>

          <li className={classes.link}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div className={classes.menu_icon}>
        <MenuIcon  className={classes.menu_icons} />
        </div>
        
      </div>
      
    </div>
  );
}

export default Navbar;
