import React from "react";
import Container from "./Container";
import Title from "./Title";
import Sub_title from "./Sub_title";
import Minicard from "./Minicard";
import Image from "./Image";
import RA1 from "../assets/RA1.png";
import RA2 from "../assets/RA2.png";
import RA3 from "../assets/RA3.png";
import RAbg from "../assets/RAbg.png";
import icon1 from "../assets/icon1.png";

const Whylearing = () => {
  return (
    <section className="bg-[url('./assets/coursebg.png')] pt-[113px] pb-[113px] relative ">
      <div className="absolute  top-0 left-0">
        <Image src={RAbg} />
      </div>
      <Container>
        <div>
          <div className=" absolute top-[147px] left-[-50px]">
            <Image src={RA1} />
          </div>

          <div className=" absolute top-[103px] left-[-50px]">
            <Image src={RA2} />
          </div>
          <div className=" absolute top-[123px] left-[-50px]">
            <Image src={RA3} />
          </div>
          <div className=" flex justify-center ">
            <Title
              title="Why learn with"
              span="our courses ?"
              textcolor="text-white"
            />
          </div>
          <div className="flex justify-center mt-7">
            <Sub_title
              textcolor="text-white"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam..."
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-y-4 justify-between mt-[118px]">
            <div className="w-full lg:w-[30%] border-none  lg:border-r lg:border-dashed pr-10 	">
              <Minicard imgsrc={icon1} title=" 01. Learn" />
            </div>
            <div className="w-full lg:w-[30%]">
              <Minicard  imgsrc={icon1} title=" 01. Learn"/>
            </div>
            <div className="w-full lg:w-[30%] boder-none lg:border-l lg:border-dashed pl-10">
              <Minicard imgsrc={icon1} title=" 01. Learn" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Whylearing;
