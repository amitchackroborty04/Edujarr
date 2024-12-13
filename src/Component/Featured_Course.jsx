import React from "react";
import Container from "./Container";
import Title from "./Title";
import Sub_title from "./Sub_title";
import Card from "./Card";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import ring from "../assets/ring.png";
import Image from "./Image";


const Featured_Course = () => {
  return (
    <section className="bg-[url('./assets/FBg.png')] relative  ">
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-[#F0F3FF] bg-opacity-60"></div> */}
      <Container>
        <div className="flex justify-center pt-[117px]">
          <Title title="Featured" span="Course" />
        </div>
        <div className="hidden lg:block absolutet top-[100px]  lg:left-[207px]  ">
         <Image src={ring}/>
        </div>
        <div className="flex justify-center mt-8 lg:mt-12">
          <Sub_title subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam..." />
        </div>
        <div className="flex justify-between flex-wrap gap-y-[50px] mt-[94px]">
          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Card
              cardImag={card1}
              cardstudentnumber="5,957 Students"
              cardTime="01h 49m"
              cardTitle="The Complete Financial AnalystTraining & Investing"
              cardPrice="$33.99"
            />
          </div>
          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Card
              cardImag={card2}
              cardstudentnumber="5,957 Students"
              cardTime="01h 49m"
              cardTitle="The Complete 2022 Web Development Bootcamp"
              cardPrice="$33.99"
            />
          </div>
          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Card
              cardImag={card3}
              cardstudentnumber="5,957 Students"
              cardTime="01h 49m"
              cardTitle="The Complete 2022 Web Development Bootcamp"
              cardPrice="$33.99"
            />
          </div>
          {/* ================================================================================= */}
          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Card
              cardImag={card4}
              cardstudentnumber="5,957 Students"
              cardTime="01h 49m"
              cardTitle="Marketing 2023: Complete Guide To Instagram Growth"
              cardPrice="$33.99"
            />
          </div>
          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Card
              cardImag={card5}
              cardstudentnumber="5,957 Students"
              cardTime="01h 49m"
              cardTitle="The Complete 2022 Web Development Bootcamp"
              cardPrice="$33.99"
            />
          </div>
          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Card
              cardImag={card6}
              cardstudentnumber="5,957 Students"
              cardTime="01h 49m"
              cardTitle="The Complete 2022 Web Development Bootcamp"
              cardPrice="$33.99"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[50px] lg:mt-[94px] pb-[121px]">
            <button className="font-Saira text-base lg:text-xl text-white font-medium py-[10px] lg:py-[20px] px-[30px] bg-button_bg rounded-[10px]">Explore courses</button>
        </div>
      </Container>
    </section>
  );
};

export default Featured_Course;
