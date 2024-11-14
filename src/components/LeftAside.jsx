import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        // Check the structure of the fetched data and update the state accordingly
        if (data && data.data && data.data.news_category) {
          setCategories(data.data.news_category);
        }
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl flex items-center justify-center font-bold bg-gray-100 p-2 mb-4">
        All Category
      </h2>
      <div className="flex flex-col space-y-4 p-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="text-lg bg-white font-medium hover:bg-gray-200 transition-colors duration-200 rounded-md p-2"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
