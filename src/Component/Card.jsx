import React from "react";
import Image from "./Image";

import { MdOutlineShoppingCart } from "react-icons/md";
const Card = ({cardImag,cardTitle,cardPrice,cardstudentnumber,cardTime}) => {
  return (
    <div className="w-full border rounded-xl shadow-2xl ">
      <Image className="w-full object-fill" src={cardImag} alt="card1" />
      <div className="px-[30px] pb-[30px]">
        <div className="flex justify-between mt-7">
          <p className="font-Saira text-sm font-midium leading-[35px] text-[#4E596B] tracking-[-3%]">
        {cardstudentnumber}
          </p>
          <p className="font-Saira text-sm font-midium leading-[35px] text-[#4E596B] tracking-[-3%]">
         {cardTime}
          </p>
        </div>
        <h1 className="font-Saira text-xl lg:text-[25px] font-semibold leading-[35px] tracking-[-3%] text-[#324361] mt-5">
         {cardTitle}
        </h1>
        <div className="flex justify-between mt-7">
          <h4 className="font-Saira text-base lg:text-[22px] font-semibold leading-[35px] tracking-[-3%] text-[#4E596B]">
            ${cardPrice}
          </h4>
          <span>
            <MdOutlineShoppingCart className="text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
