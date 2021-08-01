import { Fragment } from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Testi from '../components/testi/testi';

function Test() {
  return (
    <div>
      <Fragment>
        <Navbar />
        <Testi />
        <Footer />
      </Fragment>
    </div>
  );
}

export default Test;
