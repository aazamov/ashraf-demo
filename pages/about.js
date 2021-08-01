import { Fragment } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import About from '../components/about/about';

function Aabout() {
  return (
    <Fragment>
      <Navbar />
      <About />
      <Footer />
    </Fragment>
  );
}

export default Aabout;
