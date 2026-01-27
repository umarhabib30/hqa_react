import React from "react";
import Hero from "../components/news/Hero";
import NewsDetails from "../components/news/NewsDetails";
import MoreNews from "../components/news/MoreNews";

const News = () => {
  return (
    <div>
      <Hero />
      <NewsDetails />
      {/* <MoreNews/> */}
    </div>
  );
};

export default News;
