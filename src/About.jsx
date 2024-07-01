import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = () => {
  return (
    <>
      <div className="mx-auto max-w-[900px] sm:px-10 px-3">
        {/* <Hero welcome_msg="About" title="Flex Store" /> */}
        <h2 className="text-center my-10 text-5xl font-BowlbyOne">
          About Opulencia
        </h2>
        <div className=" ">
          <h4 className="mb-2 font-semibold text-2xl"> Welcome to Opulencia</h4>
          <p className="text-lg">
            Where luxury meets elegance. Founded on a passion for opulence and
            an eye for exquisite detail, Opulencia is your premier destination
            for the finest in high-end fashion, accessories, and home decor.
          </p>
        </div>
        <div className=" my-5">
          <h4 className="mb-2 font-semibold text-2xl"> Our Philosophy</h4>
          <p className="text-lg ">
            Our Philosophy At Opulencia, we believe that luxury is not just a
            privilege but a lifestyle. Our curated collections are meticulously
            selected to bring you the epitome of sophistication and style. From
            timeless classics to contemporary masterpieces, each piece in our
            store reflects our commitment to quality, craftsmanship, and
            unparalleled beauty.
          </p>
        </div>
        <img src="imgs/about2.jpg" alt="" />
        <div className=" my-5">
          <h4 className="mb-2 font-semibold text-2xl"> Our Mission</h4>
          <p className="text-lg">
            Our mission is to provide you with an unparalleled shopping
            experience, combining exclusive products with exceptional service.
            Whether you are looking to elevate your wardrobe, adorn your living
            space, or find the perfect gift, Opulencia offers a diverse range of
            premium products to meet your discerning tastes.
          </p>
        </div>
        <div className=" my-5">
          <h4 className="mb-2 font-semibold text-2xl"> The Community</h4>
          <p className="text-lg">
            We are more than just a store; we are a community of like-minded
            individuals who appreciate the finer things in life. Join us as we
            celebrate the art of luxury and embrace a world where elegance is
            always in fashion.
          </p>
        </div>
        <img src="imgs/about1.jpg" alt="" />
        <h4 className="text-center my-10 text-3xl font-BowlbyOne">
          Thank you for choosing Opulencia. Indulge in the extraordinary.
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default About;
