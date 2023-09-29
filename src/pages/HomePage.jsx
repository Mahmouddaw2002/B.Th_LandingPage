import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Description from "../components/Description";
import Products from "../components/Products";
import Payment from "../components/Payment";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#FFF8F1] scroll-smooth">
      <Navbar />
      <Header />
      <Description />
      <Products />
      <Payment />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
