import React from "react";
import { useNavigate } from "react-router-dom";
import Blogs from "../database";
const LatestHollywood = () => {
  let navigate = useNavigate();
  const hollywoodBlogs = Blogs.filter((blog) => blog.category === "Hollywood");
  const latest = hollywoodBlogs.filter(
    (blog, index) =>
      index < hollywoodBlogs.length && index > hollywoodBlogs.length - 4
  );
  return (
    <div className="latest-hollywood">
      <h2> Latest Hollywood Articles</h2>
      <div className="hr" />
      <hr />
      <div className="latest-blogs-cards flex">
        {latest.map((item, index) => (
          <div
            className="latest-hollywood-card"
            key={item.id}
            onClick={() => navigate(`/${item.category}/${item.id}`)}
          >
            <div className="latest-blogs-card-info">
              <h3>{item.title.slice(0, 60)}</h3>
              <p className="two-lines">{item.text.slice(0, 350)}</p>
              <span className="category-date">
                {item.category}
                <span>/ {item.date}</span>
              </span>
            </div>
            {index > 0 ? <hr className="vertical-hr" /> : <></>}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex load-more" onClick={() => navigate("/Hollywood")}>
        <p>VIEW MORE</p>
        <img src="images/arrow-1.svg" alt="down-arrow" />
      </div>
    </div>
  );
};

export default LatestHollywood;
