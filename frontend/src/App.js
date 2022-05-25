import React from 'react';

import { About, Footer, Header, Skills,Work } from './container';
import { Navbar } from './components';
// import {Testimonial} from './container';
 import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/*<Testimonial />*/}
    <Footer />
  </div>
);

export default App;