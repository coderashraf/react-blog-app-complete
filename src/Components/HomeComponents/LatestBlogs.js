import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestBlogs = () => {
  let navigate = useNavigate();
  
  const [latest,setLatest]=useState([])

  useEffect(() => {
    axios.get("https://blog-app-backend-coderashraf.herokuapp.com/api/latest-blogs").then((res)=>{
      setLatest(res.data)
    })
  }, [])
  

  if(latest.length<=0){return null}
  else{
  return (
    <div id="latest-blogs">
      <h2> The Latest Articles</h2>
      <div className="hr" />
      <div className="latest-blogs-cards flex">
        {latest.map((item) => (
          <div
            className="latest-blogs-card"
            key={item.id}
            onClick={() => navigate(`/${item.category}/${item.id}`)}
          >
            <img src={item.image} alt=" "></img>
            <div className="latest-blogs-card-info">
              <h3>{item.title.slice(0, 60)}</h3>
              <p className="two-lines">{item.text.slice(0, 100)}</p>
              <p className="category-date">
                {item.category}
                <span>/ {item.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );}
};

export default LatestBlogs;
