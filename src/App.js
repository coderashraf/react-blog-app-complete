import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import NavCompo from "./Components/Navbar/NavCompo";
import PageNotFound from "./Components/PageNotFound";
import CategorizedBlogs from "./Components/CategorizedBlogs";
import Blog from "./Components/Blog";
import ScrollToTop from "./Components/scrollToTop";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavCompo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:category" element={<CategorizedBlogs />} />
          <Route path="/:category/:blogId" element={<Blog />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
