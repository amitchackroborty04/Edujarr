import React from "react";
import Image from "./Image";
import cardimg from "../assets/card_item_img.png";
import { IoIosStar } from "react-icons/io";


const Card_item = () => {
  return (
    <div className="  ">
      <div className="flex items-center gap-x-7">
        <div>
          <Image src={cardimg} />
        </div>
        <div>
          <h3 className="font-Rowdies font-bold text-[25px] leading-10 text-[#1D1D45]">
            Ronald Richards
          </h3>
        </div>
      </div>
      <p className="font-Saira font-normal text-[18px] leading-7 text-[#7E7EAA] mt-[42px]">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <div className="flex gap-x-4" >
        <span>
          <IoIosStar className="text-2xl text-yellow-500" />
        </span>
        <span>
          <IoIosStar className="text-2xl text-yellow-500" />
        </span>
        <span>
          <IoIosStar className="text-2xl text-yellow-500" />
        </span>
        <span>
          <IoIosStar className="text-2xl text-yellow-500" />
        </span>
        <span>
          <IoIosStar className="text-2xl text-yellow-500" />
        </span>
      </div>
    </div>
  );
};

export default Card_item;
