import classes from '../components/features/feature.module.css';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { Fragment } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function Feature() {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.feat}>
        <div className={classes['feature_text']}>
          <h1>Imagine Feature</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
            quaerat sapiente nam, id vero.
          </p>
        </div>
        <div className={classes.card}>
          <div className={classes['cards']}>
            <AutorenewIcon className={classes.icon} />
            <h4>Marketing Consulting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button>Learn More</button>
          </div>
          <div className={classes['cards']}>
            <AutorenewIcon className={classes.icon} />
            <h4>Marketing Consulting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button>Learn More</button>
          </div>
          <div className={classes['cards']}>
            <AutorenewIcon className={classes.icon} />
            <h4>Marketing Consulting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button>Learn More</button>
          </div>
          <div className={classes['cardss']}>
            <AutorenewIcon className={classes.icon} />
            <h4>Marketing Consulting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button>Learn More</button>
          </div>
          <div className={classes['cardss']}>
            <AutorenewIcon className={classes.icon} />
            <h4>Marketing Consulting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button>Learn More</button>
          </div>
          <div className={classes['cardss']}>
            <AutorenewIcon className={classes.icon} />
            <h4>Marketing Consulting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Feature;
