import React from "react";
import Image from "./Image";


const Minicard = ({imgsrc,title,text}) => {
  return (
    <div className="w-full text-center">
      <Image className="inline-block" src={imgsrc} alt="icon1" />
      <h3 className="font-Rowdies font-bold text-[25px] leading-6 text-white mt-4 lg:mt-8">
       {title}
      </h3>
      <p className="font-Saira font-normal text-[18px] leading-7 text-white mt-4 lg:mt-7 ">
        Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis
        donec massa aliqua.
      </p>
    </div>
  );
};

export default Minicard;
