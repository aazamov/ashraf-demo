import classes from "./feature.module.css";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

function Feature() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  return (
    <div className={classes.feat}>
      <div data-aos="fade-up" className={classes["feature_text"]}>
        <h1>Imagine Feature</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </p>
      </div>
      <div  className={classes.card}> 
        <div data-aos="fade-up" className={classes["cards"]}>
          <AutorenewIcon className={classes.icon} />
          <h4>Marketing Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quis molestiae vitae eligendi at.
          </p>
          <button>Learn More</button>
        </div>
        <div data-aos="fade-up" className={classes["cards"]}>
          <AutorenewIcon className={classes.icon} />
          <h4>Marketing Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quis molestiae vitae eligendi at.
          </p>
          <button>Learn More</button>
        </div>
        <div data-aos="fade-up" className={classes["cards"]}>
          <AutorenewIcon className={classes.icon} />
          <h4>Marketing Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quis molestiae vitae eligendi at.
          </p>
          <button>Learn More</button>
        </div>
        <div data-aos="fade-up" className={classes["cardss"]}>
          <AutorenewIcon className={classes.icon} />
          <h4>Marketing Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quis molestiae vitae eligendi at.
          </p>
          <button>Learn More</button>
        </div>
        <div data-aos="fade-up" className={classes["cardss"]}>
          <AutorenewIcon className={classes.icon} />
          <h4>Marketing Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quis molestiae vitae eligendi at.
          </p>
          <button>Learn More</button>
        </div>
        <div data-aos="fade-up" className={classes["cardss"]}>
          <AutorenewIcon className={classes.icon} />
          <h4>Marketing Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quis molestiae vitae eligendi at.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
