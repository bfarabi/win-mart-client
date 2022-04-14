import React from "react";
import Navbar from "./../Components/Navbar";
import Announcement from "./../Components/Announcement";
import Slider from "./../Components/Slider";
import Categories from './../Components/Categories';
import Products from './../Components/Products';
import NewsLatter from "../Components/NewsLatter";
import Footer from "../Components/Footer";

const Home = () => {
  return ( 
    <div className="container">
      
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLatter></NewsLatter>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
