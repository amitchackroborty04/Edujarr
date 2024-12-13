import React from "react";
import Image from "./Image";

const Category_card = ({ imgsrc, title, text }) => {
  return (
    <div className="w-full text-center  ">
      <div className="flex justify-center">
        <Image src={imgsrc} alt="categoryicon0" />
      </div>
      <h2 className="font-Saira font=semibold text-xl lg:text-[25px] text-[#324361] leading-[35px] mt-[50px]">
        {title}
      </h2>
      <p className="font-Saira font-medium text-sm lg:text-[18px] text-[#4F547B] leading-[23px] mt-[45px]">
       {text}
      </p>
    </div>
  );
};

export default Category_card;
