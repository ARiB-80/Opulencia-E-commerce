import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";
import TopRatedProdcuts from "./components/TopRatedProdcuts";

const Home = () => {
  return (
    <>
      <div className="mx-auto sm:px-10 px-3">
        <Hero welcome_msg="SHOP AT" title="Opulencia" />
        <TopRatedProdcuts />
        <Services />
      </div>
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;
