import classes from './footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from 'next/link'

function Footer() {
  return (
    <div className={classes.foot}>
      <div className={classes.icons}>
        <Link href='https://www.facebook.com/'>
        <FacebookIcon  className={classes.face} />
        </Link>
        <Link href='https://twitter.com/?lang=ru'>
        <TwitterIcon className={classes.icon} />
        </Link>
        <Link href='https://www.instagram.com/'>
        <InstagramIcon className={classes.face} />
        </Link>
        <Link href='https://www.linkedin.com/'>
        <YouTubeIcon className={classes.icon} />
        </Link>
        <Link href='https://xn--80affa3aj0al.xn--80asehdb/#/login'>
        <TelegramIcon className={classes.face} />
        </Link>
        <Link href='https://www.pinterest.com/'>
        <PinterestIcon className={classes.icon} />
        </Link>
        
        
        
        
        
       
      </div>
      <h4 className={classes.last_last}>
        Copyright ©2021 All rights reserved | This template is made with by
        <span> AshrafKan</span>
      </h4>
    </div>
  );
}

export default Footer;
