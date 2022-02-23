import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopPosts from "./TopPosts";
import axios from "axios";


const CategorizedBlogs = () => {
  let navigate = useNavigate();
  let categories = ["Bollywood", "Technology", "Hollywood", "Fitness", "Food"];
  let { category } = useParams();
  const [blogs,setBlogs]=useState([])

  useEffect(() => {
    const found = categories.find((element) => element === category);
    if (found === undefined) {
      navigate("/pagenotfound");
    }
  },);
  useEffect(() => {
    //api call
    axios.get(`https://blog-app-backend-coderashraf.herokuapp.com/api/category/${category}`).then((res)=>{
    setBlogs(res.data)
    })
  }, [category])
  
  if(blogs.length<=0){
    return(
  <div className="loader">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>)
  }
  else {
    return (
    <div className="categorized-blogs">
      <div className="flex latest-bollywood-container">
        <div className="latest-bollywood-larea">
          <h2 className="categorized-blogs-h2">{category}</h2>
          <div className="hr categorized-blogs-hr" />
          <div className="blogs-container">
            <div className="blogs">
              {blogs.map((item, index) => (
                <div key={item.id}>
                  {index > 0 ? <hr /> : <></>}
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
              ))}
            </div>
          </div>
        </div>
        <div className="latest-bollywood-rarea ">
          <TopPosts />
          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
      </div>
    </div>
  );}
};

export default CategorizedBlogs;
