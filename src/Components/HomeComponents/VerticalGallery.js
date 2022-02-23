import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const VerticalGallery = () => {

  let navigate = useNavigate();
  const [techLatestBlog,setTechLatestBlog]=useState([])
  useEffect(() => {
    //api call to get the last post of technology category
    axios.get(`https://blog-app-backend-coderashraf.herokuapp.com/api/latestTechBlog/`).then((res)=>{
      setTechLatestBlog(res.data)
    })
  },[]);

  if(techLatestBlog.length<=0){return null}
  else{
  return (
    <div className="vertical-gallery"
            style={{
              backgroundImage: `url(${techLatestBlog[0].image})`,
              backgroundRepeat: "no-repeat",
              WebkitBackgroundSize: "cover",
            }}
            onClick={() =>
              navigate(`/${techLatestBlog[0].category}/${techLatestBlog[0].id}`)
            }
          >
            <h2>{techLatestBlog[0].title}</h2>
            <p>
              {techLatestBlog[0].category}/ {techLatestBlog[0].date}
            </p>
          </div>
  )}
}

export default VerticalGallery