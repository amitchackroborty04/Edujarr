import React from "react";

const Title = ({ title, span, textcolor }) => {
  return (
    <div>
      <h1
        className={`font-Rowdies text-[27px] lg:text-[45px] font-normal leading-9 lg:leading-[70px] tracking-[-3%] ${
          textcolor ? textcolor : "text-[#323232] inline-block"
        } `}
      >
        {title} <span className="text-[#2AAA94]">{span}</span>
      </h1>
    </div>
  );
};

export default Title;
