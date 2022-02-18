import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import  axios  from "axios";

const Blog = () => {
  let navigate = useNavigate();
  let { blogId } = useParams();
  
  const [blog,setBlog]=useState([])

  useEffect(() => {
    //api call 
    axios.get(`https://blog-app-backend-coderashraf.herokuapp.com/api/blog/${blogId}`).then((res)=>{
    setBlog(res.data)
    })
    .catch(error => {
      navigate("/pagenotfound");
    });
  },[blogId,navigate]);

  return (
    <div className="blog-main">
      {blog.map((item,index) => index < 1 && (
      <div className="blog-container" key={item.id}>
        <h2>{item.title}</h2>
         <div className="clap-share">
          <div className="flex">
            <img src="/images/rythm.svg" alt="claps" />
            <p>{item.claps}</p>
          </div>
          <div className="flex">
            <img src="/images/share.svg" alt="share" />
            <p>Share this article</p>
          </div>
        </div>
        <div className="blog-header flex">
          <div className="flex">
            <img src="/images/profilepicture.png" alt="down-arrow" />
            <div className="blog-info">
              <p>{item.author}</p>
              <span>
                {item.date} · {item.read}
              </span>
            </div>
          </div>
          <div className="social">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
          </div>
        </div>
        <div className="blog-content">
          <img src={item.image} alt="hiS" />
          <p>{item.text}</p>
          <div className="tags">
            {item.tags !== undefined ? (
              item.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="claps flex">
            <img src="/images/rythm.svg" alt=" "></img>
            <p>{item.claps}&nbsp;claps</p>
          </div>
          <div className="author flex">
            <img src="/images/profilepicture.png" alt="down-arrow" />
            <div className="blog-info">
              <span>WRITTEN BY</span>
              <p>{item.author}</p>
              <span>
                {item.date} · {item.read}
              </span>
            </div>
          </div>
        </div> 
      </div>))}
      <div className="more-articles-section ">
        <div className="more-articles">
          <h2>More From The Siren</h2>
          <hr />
          <div className="flex more-articles-cards">
            {blog.map((item,index) => index>0&&(
              <div
                className="more-articles-card"
                onClick={() => navigate(`/${item.category}/${item.id}`)}
                key={item.id}
              >
                <p className="related-reads">Related reads</p>
                <img src={item.image} alt={item.title} />
                <p className="title">{item.title}</p>
                <div className="author flex">
                  <img src="/images/profilepicture.png" alt="down-arrow" />
                  <div className="blog-info">
                    <p className="title-mobile">{item.title}</p>
                    <p className="author-name">{item.author}</p>
                    <span>
                      {item.date} · {item.read}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
