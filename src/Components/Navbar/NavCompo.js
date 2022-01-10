import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navCompo.css";

const NavCompo = () => {
  const navigate = useNavigate();
  return (
    <div id="navCompo" className="flex">
      <div className="icon flex" onClick={() => navigate("/")}>
        <p className="iconA">The</p>
        <p className="iconB">Siren</p>
      </div>
      <div className="menu">
        <label htmlFor="check">
          <i className="fas fa-bars"></i>
        </label>
      </div>
      <div className="nav">
        <input type="checkbox" id="check" />
        <div className="nav-item flex">
          <Link to="/">Home</Link>
          <Link to="/Bollywood">Bollywood</Link>
          <Link to="/Technology">Technology</Link>
          <Link to="/Hollywood">Hollywood</Link>
          <Link to="/Fitness">Fitness</Link>
          <Link to="/Food">Food</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavCompo;
