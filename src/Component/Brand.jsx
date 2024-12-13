import React from "react";
import Container from "./Container";
import Image from "./Image";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";

const Brand = () => {
  return (
    <section className="bg-[url('./assets/barndbg.png')]">
      <Container>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-3 justify-between items-center py-5 lg:py-[50px]">
          <div className="w-[27%] lg:w-[16%]">
            <Image src={brand1} />
          </div>
          <div className="w-[27%] lg:w-[16%]">
            <Image src={brand2} />
          </div>
          <div className="w-[27%] lg:w-[16%]">
            <Image src={brand3} />
          </div>
          <div className="w-[27%] lg:w-[16%]">
            <Image src={brand4} />
          </div>
          <div className="w-[27%] lg:w-[16%]">
            <Image src={brand5} />
          </div>
          <div className="w-[27%] lg:w-[16%]">
            <Image src={brand6} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Brand;
