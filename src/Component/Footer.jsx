import React from "react";
import Container from "./Container";
import Image from "./Image";
import logo2 from "../assets/logo2.png";
import FoterText from "./FoterText";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiDribbbleLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='bg-[url("./assets/footerbg.png")] pt-16 lg:pt-[118px]  '>
      <Container>
        <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-y-10 justify-between  border-b pb-12 lg:pb-[90px] ">
          <div className="w-full lg:w-[30%]">
            <div className="flex justify-center lg:justify-start">

            <Image className="mb-10 lg:mb-[74px]" src={logo2} />
            </div>
            <FoterText text="Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " />
          </div>
          <div className="w-full lg:w-[14%]">
            <h2 className="font-Rowdies font-bold  text-[25px] leading-6 text-[#FFFFFF] text-center lg:text-left">
              Quick Links
            </h2>
            <div className="flex justify-center lg:justify-start  gap-x-10 mt-10 lg:mt-[100px]">
              <div className="w-[10%] lg:w-[48%]" >
                <FoterText text="Home" />
              </div  >
              <div className="w-[10%] lg:w-[48%]">
                <FoterText text="Blog" />
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-x-12 mt-4 lg:mt-6">
              <div className="w-[10%] lg:w-[48%]">
                <FoterText text="Course" />
              </div>
              <div className="w-[10%] lg:w-[48%]">
                <FoterText text="Contact" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <h2 className="font-Rowdies font-bold  text-[25px] leading-6 text-[#FFFFFF] text-center lg:text-left">
              Contact us
            </h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-y-4 mt-10 lg:mt-[100px]">
              <div className="w-full lg:w-[48%] ">
                <div className="flex justify-center lg:justify-start  items-center gap-x-3">
                  <span>
                    <LuPhone className="text-2xl text-white " />
                  </span>
                  <FoterText text="(209) 555-0104" />
                </div>
                <div className="flex justify-center  items-center gap-x-3 mt-6">
                  <span>
                    <MdOutlineMailOutline className="text-2xl text-white " />
                  </span>
                  <FoterText text="michelle.rivera@example.com" />
                </div>
              </div>
              <div className="w-full lg:w-[48%]">
                <div className="flex justify-center lg:justify-start gap-x-3">
                  <span>
                    <VscLocation className="text-2xl text-white " />
                  </span>
                  <FoterText text="2715 Ash Dr. San Jose, South Dakota 83475" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-7 lg:pb-10 mt-8">
          <div>
            <h5 className="font-Saira font-normal text-white text-[13px] lg:text-[18px]">Copyright 2023 | All Rights Reserved</h5>
          </div>
          <div className="flex gap-x-2 items-center">
            <span>
            <TiSocialFacebookCircular className="text-white" />
            </span>
            <span>
            <CiTwitter className="text-white" />
            </span>
            <span>
            <IoLogoInstagram className="text-white" />
            </span>
            <span>
            <RiDribbbleLine className="text-white" />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
