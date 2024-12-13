import React from "react";
import Navbar from "../Component/Navbar";
import Featured_Course from "../Component/Featured_Course";
import Whylearing from "../Component/Whylearing";
import Top_Categories from "../Component/Top_Categories";
import Member from "../Component/Member";
import Video from "../Component/Video";
import Testimonial from "../Component/Testimonials";
import Footer from "../Component/Footer";
import Banner from "../Component/Banner";
import Brand from "../Component/Brand";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Brand/>
      <Featured_Course />
      <Whylearing/>
      <Top_Categories/>
      <Member/>
      <Video/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default Home;
