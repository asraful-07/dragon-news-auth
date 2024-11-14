import React from "react";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author: { name, published_date, img },
    rating: { number },
    total_view,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="border rounded-lg shadow-md bg-white p-4 mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={img} alt={name} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-xs text-gray-500">{published_date}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-800">
          <i className="fas fa-share-alt"></i>
        </button>
      </div>
      <h1 className="text-xl font-bold mb-3">{title}</h1>
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full object-cover rounded mb-3"
      />
      <p className="text-gray-600 mb-3">
        {details.slice(0, 150)}...{" "}
        <span className="text-orange-500">Read More</span>
      </p>
      <div className="flex justify-between items-center border-t pt-3">
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="font-medium text-gray-800">{number}</span>
        </div>
        <div className="flex items-center">
          <FaEye className="text-gray-500 mr-1" />
          <span className="text-gray-600">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
