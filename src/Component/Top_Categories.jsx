import React from "react";
import Container from "./Container";
import Title from "./Title";
import Sub_title from "./Sub_title";
import Category_card from "./Category_card";
import categoryicon0 from "../assets/categoryicon0.png";
import categoryicon1 from "../assets/categoryicon.png";

const Top_Categories = () => {
  return (
    <section className="bg-[url('./assets/FBg.png')]  ">
      <Container>
        <div className="flex justify-center pt-[100px]">
          <Title title="Top " span=" Categories" />
        </div>
        <div className="flex justify-center mt-8 lg:mt-[42px]">
          <Sub_title subTitle="12,000+ unique online course list designs" />
        </div>
        {/* ============================================================== */}
        <div className="flex flex-wrap la:flex-nowrap gap-y-5 justify-between mt-[50px] lg:mt-[100px] pb-[70px] lg:pb-[155px]">
          <div className="w-[45%] lg:w-[15%] border bg-[#FFFFFF] rounded-[20px] py-[37px]">
            <Category_card
              imgsrc={categoryicon0}
              title=" Digtal Marketing"
              text=" 25 Courses"
            />
          </div>
          <div className="w-[45%] lg:w-[15%] border bg-[#FFFFFF] rounded-[20px] py-[37px]">
            <Category_card
              imgsrc={categoryicon1}
              title=" Digtal Marketing"
              text=" 25 Courses"
            />
          </div>
          <div className="w-[45%] lg:w-[15%] border bg-[#FFFFFF] rounded-[20px] py-[37px] ">
          <Category_card
              imgsrc={categoryicon1}
              title=" Digtal Marketing"
              text=" 25 Courses"
            />
          </div>
          <div className="w-[45%] lg:w-[15%] border bg-[#FFFFFF] rounded-[20px] py-[37px]">
          <Category_card
              imgsrc={categoryicon0}
              title=" Digtal Marketing"
              text=" 25 Courses"
            />
          </div>
          <div className="w-[45%] lg:w-[15%] border bg-[#FFFFFF] rounded-[20px] py-[37px]">
          <Category_card
              imgsrc={categoryicon1}
              title=" Digtal Marketing"
              text=" 25 Courses"
            />
          </div>
          <div className="w-[45%] lg:w-[15%] border bg-[#FFFFFF] rounded-[20px] py-[37px] ">
          <Category_card
              imgsrc={categoryicon1}
              title=" Digtal Marketing"
              text=" 25 Courses"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Top_Categories;
