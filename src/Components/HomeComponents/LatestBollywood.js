import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopPosts from "../TopPosts";
import VerticalGallery from "./VerticalGallery";
import axios from "axios";

const LatestBollywood = () => {
  let navigate = useNavigate();

  const [blogs,setBlogs]=useState([])
  useEffect(() => {
    axios.get("https://blog-app-backend-coderashraf.herokuapp.com/api/latest-bollywood").then((res)=>{
      setBlogs(res.data)
    })
  }, [])

  if(blogs.length<=0){return null}
  else{
  return (
    <div>
      <h2>Latest Bollywood Articles</h2>
      <div className="hr" />
      <div className="latest-bollywood-container flex">
        <div className="latest-bollywood-larea">
          <hr />
          <div
            className="latest-bollywood-card first-bollywood-card flex"
            onClick={() => navigate(`/${blogs[0].category}/${blogs[0].id}`)}
          >
            <img src={blogs[0].image} alt="movie-poster"></img>
            <div className="latest-bollywood-card-info">
              <h3>{blogs[0].title.slice(0, 62)}</h3>
              <p className="">{blogs[0].text.slice(0, 100)}</p>
              <span className="category-date">
                {blogs[0].category}
                <span>/ {blogs[0].date}</span>
              </span>
            </div>
          </div>
          {blogs.map(
            (item, index) =>
              index > 0 &&
              index < 4 && (
                <div key={item.id}>
                  <hr />
                  <div
                    className="latest-bollywood-card flex"
                    onClick={() => navigate(`/${item.category}/${item.id}`)}
                  >
                    <img src={item.image} alt="movie-poster"></img>
                    <div className="latest-bollywood-card-info">
                      <h4>{item.title.slice(0, 60)}</h4>
                      <p className="">{item.text.slice(0, 100)}</p>
                      <span className="category-date">
                        {item.category}
                        <span>/ {item.date}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )
          )}
          <div
            className="flex load-more"
            onClick={() => navigate("/Bollywood")}
          >
            <img src="images/arrow.svg" alt="down-arrow" />
            <p>LOAD MORE</p>
          </div>
          <VerticalGallery/>
        </div>
        <div className="latest-bollywood-rarea ">
          <div className="advertisement">
            <p>Advertisement</p>
          </div>
          <TopPosts />
        </div>
      </div>
    </div>
  );}
};

export default LatestBollywood;
