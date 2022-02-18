import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopPosts = () => {
const navigate=useNavigate()

  const [sorted,setSorted]=useState([])
 
  useEffect(() => {
    axios.get("https://blog-app-backend-coderashraf.herokuapp.com/api/top-posts").then((res)=>{
      setSorted(res.data)
    }) 
  },[])

  if (sorted.length<=0){ return null}
  else{
  return (
    
    <div className="top-posts">
      <h2>Top Posts</h2>
      <div className="hr" />
      <div
        className="top-posts-card first-top-post "
        onClick={() => navigate(`/${sorted[0].category}/${sorted[0].id}`)}
      >
        <img src={sorted[0].image} alt="poster"></img>
        <div className="flex">
          <div className="top-posts-card-info ">
            <h3>{sorted[0].title.slice(0, 62)}</h3>
            <span className="category-date">
              {sorted[0].category}
              <span>/ {sorted[0].date}</span>
            </span>
          </div>
          <div className="post-number">1</div>
        </div>
      </div>
      {sorted.map(
        (item, index) =>
          index > 0 &&
          index < 4 && (
            <div key={item.id}>
              <hr />
              <div
                className="top-posts-card flex"
                onClick={() => navigate(`/${item.category}/${item.id}`)}
              >
                <img src={item.image} alt="movie-poster"></img>
                <div className="top-posts-card-info">
                  <h3>{item.title.slice(0, 15)}</h3>
                  <span className="category-date">
                    {item.category}
                    <span>/ {item.date}</span>
                  </span>
                </div>
                <div className="post-number">{index + 1}</div>
              </div>
            </div>
          )
      )}
    </div>
  );}
};

export default TopPosts;
