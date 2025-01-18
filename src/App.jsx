import React from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Body from "./components/Body";
import More from "./components/More";
import Earn from "./components/Earn";
import Revenue from "./components/Revenue";
import Coins from "./components/Coins";
import Invest from "./components/Invest";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Head />
      <Body />
      <More />
      <Earn />
      <Revenue />
      <Coins />
      <Invest />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
