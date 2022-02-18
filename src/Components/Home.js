import React from "react";
import Gallery from "./HomeComponents/Gallery";
import "./HomeComponents/homeStyle.css";
import LatestBlogs from "./HomeComponents/LatestBlogs";
import LatestBollywood from "./HomeComponents/LatestBollywood";
import LatestHollywood from "./HomeComponents/LatestHollywood";
const Home = () => {
  return (
    <div className="home-page">
      <Gallery />
      <LatestBlogs />
      <LatestBollywood />
      <LatestHollywood />
    </div>
  );
};

export default Home;
