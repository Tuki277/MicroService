import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './layouts/footer';
import Header from './layouts/header';
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
