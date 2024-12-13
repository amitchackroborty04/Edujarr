import React from "react";
import Container from "./Container";
import Title from "./Title";
import Sub_title from "./Sub_title";
import Card_item from "./Card_item";

const Testimonials = () => {
  return (
    <section className="bg-[url('./assets/FBg.png')] ">
      <Container>
        <div className="flex justify-center pt-[100px]">
          <Title span="Testimonials" />
        </div>
        <div className="flex justify-center mt-7">
          <Sub_title subTitle="What our student say about us" />
        </div>
        {/* ============================================================= */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between pb-[80px] mt-10  lg:mt-[100px]  gap-y-7 ">
          <div className="w-full lg:w-[32%] bg-[#FFFFFF] py-[50px] px-[40px] shadow-lg rounded-[30px] ">
            <Card_item />
          </div>
          <div className="w-full lg:w-[32%] bg-[#FFFFFF] py-[50px] px-[40px] shadow-lg rounded-[30px] ">
            <Card_item />
          </div>
          <div className="w-full lg:w-[32%] bg-[#FFFFFF] py-[50px] px-[40px] shadow-lg rounded-[30px] ">
            <Card_item />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
