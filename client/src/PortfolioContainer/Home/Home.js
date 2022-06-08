import React from "react";
import Profile from "./Profile/Profile";
import "./Home.css";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
