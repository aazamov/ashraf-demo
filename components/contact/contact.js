import Link from 'next/link';
import { Fragment } from 'react';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import classes from './contact.module.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Contact() {
  return (
    <Fragment>
      <Navbar />

      <div className={classes.contact}>
        <div className={classes.back}>
          <Link href='/'>
          <ArrowBackIosIcon className={classes.last_btn} />
          </Link>
        </div>
        <h1 className={classes.head_text}>Contact Us</h1>
        <div className={classes.inputs}>
          <h2 className={classes.form}>Contact Form</h2>
          <div className={classes.name}>
            <form>
              <label className={classes.fname_label}>FirstName</label>
              <input id='fname' />
              <label className={classes.fname_label}>LastName</label>
              <input id='lname' type='text' />
            </form>
          </div>
          <form className={classes.forma}>
            <label name='email' className={classes.label_email}>
              Email
            </label>
            <input id='email' className={classes.email} />
            <label name='subject' className={classes.label_email}>
              Subject
            </label>
            <input id='subject' className={classes.email} />
            <label className={classes.label_email}>Message</label>
            <input
              placeholder='Leave your message here...'
              className={classes.message}
            />
          </form>
          <div href='/' className={classes.button}>
            <Link href='/' className={classes.btn}>
              Send Message
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Contact;
