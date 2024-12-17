import React, { useState } from "react";
import Container from "./Container";
import Image from "./Image";
import logo from "../assets/logo.png";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
const Navbar = () => {
  let [menu,setmenu]=useState(false)

  let handlemenu = () => {
     setmenu(!menu)
  }

  return (
    <Container>
      <nav className=" py-5 lg:py-7 bg-white relative  ">
        <div className="flex  justify-between items-center">
          <div className="w-[40%]lg:w-[15%]">
            <Image className="w-[400px] lg:w-auto bg-cover" src={logo} alt="logo" />
          </div>
          <div className=" w-[40%]  ">
            <ul className={`z-50 flex flex-col lg:flex-row absolute top-5 ${menu ? "left-[-20px]" : "left-[-90%]"} duration-500  lg:static    pl-10 lg:pl-0 pt-10 lg:pt-0  gap-y-5 lg:justify-between bg-[#FFFFFF] lg:bg-transparent h-screen lg:h-auto w-[80%] lg:w-auto cursor-pointer`}>
              <li className="font-Saira text-xl font-medium leading-6 text-[#1B2336] hover:text-[#2AAA94] duration-300">
                Home
              </li>
              <li className="font-Saira text-xl font-medium leading-6 text-[#1B2336]">
                Courses
              </li>
              <li className="font-Saira text-xl font-medium leading-6 text-[#1B2336] hover:text-[#2AAA94] duration-300">
                Blog
              </li>
              <li className="font-Saira text-xl font-medium leading-6 text-[#1B2336] hover:text-[#2AAA94] duration-300">
                Shop
              </li>
              <li className="font-Saira text-xl font-medium leading-6 text-[#1B2336] hover:text-[#2AAA94] duration-300">
                Pages
              </li>
              <li className="font-Saira text-xl font-medium leading-6 text-[#1B2336] hover:text-[#2AAA94] duration-300">
                Events
              </li>
              <span className="block lg:hidden absolute top-5 right-4">
              <RxCrossCircled onClick={()=>setmenu(false)} className="text-2xl text-red-500" />
              </span>
            </ul>
          </div>
          <div className=" w-[9%] mr-[50px] lg:mr-0 flex gap-x-2 lg:gap-x0 justify-between items-center">
            <span>
              <CiShoppingBasket className="text-base lg:text-3xl" />
            </span>
            <span>
              <FaRegUserCircle className="text-base lg:text-2xl" />
            </span>
            <span>
              <CiSearch className="text-base lg:text-3xl" />
            </span>
          </div>
          <div className="w-[25%] lg:w-[18%] mr-[50px] lg:mr-0 flex gap-x-3 lg:justify-between items-center">
            <div>
              <button className="font-Saira text-[12px] lg:text-xl font-medium leading-9 text-[#4A4A4A] border-b-[1.5px] border-[#4A4A4A]">
                Login
              </button>
            </div>
            <div>
              <button className="font-Saira text-[12px] lg:text-xl font-medium leading-9 text-white border bg-button_bg py-0 lg:py-5 px-2 lg:px-7 rounded-[10px]">
                Signup
              </button>
            </div>
          </div>
          <span className="block lg:hidden">
          <AiOutlineMenuFold onClick={handlemenu} className="text-2xl"/>
          </span>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
