import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="text-xl font-bold flex items-center">Dragon News Home</h2>
      <p>News Found On This Category {news.length}</p>
      {news.map((SingleNews, idx) => (
        <NewsCard key={idx} news={SingleNews} />
      ))}
    </div>
  );
};

export default CategoryNews;
