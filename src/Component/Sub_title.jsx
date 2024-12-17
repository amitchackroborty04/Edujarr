import React from "react";

const Sub_title = ({subTitle,textcolor}) => {
  return (
    <div>
      <p className={`font-Saira text-base lg:text-[25px] font-normal leading-[35px]  w-full lg:w-[691px] text-center ${textcolor ? textcolor : "text-[#4E596B]"}`} >{subTitle}</p>
    </div>
  );
};

export default Sub_title;
