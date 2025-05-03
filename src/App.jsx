import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Trending from "./sections/Trending";
import Pricing from "./sections/Pricing";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Trending />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
