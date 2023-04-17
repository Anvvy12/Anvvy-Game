import React from 'react';
import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import Main from './features/main/Main';
import './index.scss';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
