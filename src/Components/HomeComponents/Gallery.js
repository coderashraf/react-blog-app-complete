import React from "react";
import Blogs from "../database";
import { useNavigate } from "react-router-dom";
const Gallery = () => {
  let navigate = useNavigate();
  const travel = Blogs.filter((blog) => blog.category === "Travel");
  return (
    <div className="gallery flex" id="gallery">
      <div
        className="gallery-left"
        style={{
          backgroundImage: `url(${travel[0].image})`,
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
        }}
        onClick={() => navigate(`/${travel[0].category}/${travel[0].id}`)}
      >
        <p className="gallery-title">{travel[0].title}</p>
        <span className="category-date">
          {travel[0].category}/ {travel[0].date}
        </span>
      </div>
      <div className="gallery-right flex">
        {travel
          .filter((item, index) => index > 0)
          .map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover",
              }}
              onClick={() => navigate(`/${item.category}/${item.id}`)}
            >
              <p className="gallery-title">{item.title}</p>
              <span className="category-date">
                {item.category}/ {item.date}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
