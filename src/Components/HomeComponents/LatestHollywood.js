import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestHollywood = () => {
  let navigate = useNavigate();
  const [latest,setLatest]=useState([])

  useEffect(() => {
    axios.get("https://blog-app-backend-coderashraf.herokuapp.com/api/latest-hollywood").then((res)=>{
      setLatest(res.data)
    })
  }, [])

  if(latest.length<=0){return null}
  else{
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
  );}
};

export default LatestHollywood;
