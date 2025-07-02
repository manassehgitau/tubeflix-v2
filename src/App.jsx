import React from "react";
import Header from "./pages/home/sections/Header";
import Hero from "./pages/home/sections/Hero";
import About from "./pages/home/sections/About";
import Features from "./pages/home/sections/Features";
import Trending from "./pages/home/sections/Trending";
import Pricing from "./pages/home/sections/Pricing";
import ContactUs from "./pages/home/sections/ContactUs";
import Footer from "./pages/home/sections/Footer";

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
