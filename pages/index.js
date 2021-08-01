import { Fragment } from 'react';
import About from '../components/about/about';
import Feature from '../components/features/feature';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Team from '../components/team.js/team';
import Testi from '../components/testi/testi';

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Feature />
       <About />
      <Team />
      <Testi />
    <Footer />  
    </Fragment>
  );
}

export default Home;
