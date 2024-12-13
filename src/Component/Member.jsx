import React from "react";
import Container from "./Container";
import Image from "./Image";
import memberimge from "../assets/member.png";
import Title from "./Title";

const Member = () => {
  return (
    <section className="mt-[137px] ">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[35%]">
                <Image src={memberimge}/>
            </div>
            <div className="w-[60%]">
                <Title title="The number one factor in"span="relevance drives out resistance."/>
                <p className="font-Saira font-normal text-[18px] leading-6 text-[#4E596B] mt-[50px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="font-Saira text-base lg:text-xl text-white font-medium py-[10px] lg:py-[20px] px-[30px] bg-button_bg rounded-[10px] mt-12">Learn More</button>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Member;
