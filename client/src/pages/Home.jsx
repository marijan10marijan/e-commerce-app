import React from "react";
import Slider from "../components/Slider/Slider";
import FeauturedProducts from "../components/FeauturedProducts/FeauturedProducts";
import Categories from "../components/Categories/Categories";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeauturedProducts type="feautured" />
      <Categories />
      <FeauturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
