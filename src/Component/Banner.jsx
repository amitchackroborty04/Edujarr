// import React from "react";
// import Container from "./Container";
// import { IoSearchOutline } from "react-icons/io5";
// import Image from "./Image";
// import sutdent from "../assets/student.png";
// import banneritem2 from "../assets/banneritem2.png";
// import banneritem3 from "../assets/banneritem3.png";
// import { FaStar } from "react-icons/fa";

// const Banner = () => {
//   return (
//     <section className="bg-[url('./assets/bannerbg.png')] bg-cover ">
//       <Container>
//         <div className="flex flex-col-reverse lg:flex-row items-center">
//           <div className="w-full lg:w-[54%] pb-10 lg:pb-0 ">
//             <h2 className="font-Saira font-semibold text-base text-center lg:text-left lg:text-[18px] leading-5 text-white mt-10 lg:mt-0 pt-[167px] ">
//               Successful coaches are visionaries
//             </h2>
//             <h3 className="font-Rowdies font-bold text-[35px] text-center lg:text-left lg:text-[80px] leading-12 lg:leading-[90px] text-white mt-10 lg:mt-[63px]">
//               Good <span className="text-[#4BE5CA]">coaching</span> is good
//               teaching & nothing else.
//             </h3>
//             <div className="flex justify-center lg:justify-start items-center gap-x-5  lg:gap-x-10  mt-[50px] lg:mt-[92px]">
//               <div>
//                 <button className="border py-4 lg:py-[22px] px-5 lg:px-[30px] rounded-lg font-Saira font-semibold text-white text-sm lg:text-[18px]">
//                   View Courses
//                 </button>
//               </div>
//               <div>
//                 <p className="font-Saira font-medium text-sm lg:text-[18px] leading-10 text-white">
//                   Get Free Consultation
//                 </p>
//               </div>
//             </div>
//             <div className="w-foll lg:w-[65%] relative mt-11 lg:mt-[80px] ">
//               <input
//                 className="w-full font-Saira font-normal text-sm lg:text-base text-[#4F547B] border rounded-[7px] py-[15px] lg:py-[30px] pl-7 outline-none"
//                 type="text"
//                 placeholder="What do you want to learn today?"
//               />
//               <div className="flex bg-button_bg items-center gap-1 p-[10px] lg:p-[15px] rounded-[10px] absolute top-[50%] translate-y-[-50%] right-3">
//                 <span>
//                   <IoSearchOutline className="text-white" />
//                 </span>
//                 <p className="font-Saira font-medium text-sm lg:text-base text-white">
//                   Search
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full lg:w-[46%] ">
//             <div className="relative pt-[50px] lg:pt-[167px]">
//               <Image src={sutdent} />

//               <div className="mt-7 justify-center  lg:absolute top-[260px] left-0 flex gap-x-4 ">
//                 <Image src={banneritem3} />
//                 <div>
//                   <div>
//                     <h4 className="font-Rowdies font-normal text-base text-white leading-5">
//                       Ronald Richards
//                     </h4>
//                     <p className="w-[272px] mt-3 lg:mt-5 font-Saira font-normal text-base text-white leading-6">
//                       In a coaching role, you ask the questions and rely more on
//                       your staff, who become the experts, to provide the
//                       information.
//                     </p>
//                     <div className="flex gap-x-3 items-center mt-2 lg:mt-5">
//                       <p className="font-Saira font-bold text-[12px] text-[#81C7A2]">
//                         4.9
//                       </p>
//                       <div className="flex gap-x-2 ">
//                         <span>
//                           <FaStar className="text-[#81C7A2] text-[12px]" />
//                         </span>
//                         <span>
//                           <FaStar className="text-[#81C7A2] text-[12px]" />
//                         </span>
//                         <span>
//                           <FaStar className="text-[#81C7A2] text-[12px]" />
//                         </span>
//                         <span>
//                           <FaStar className="text-[#81C7A2] text-[12px]" />
//                         </span>

//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className=" absolute  ">
//                 <Image src={banneritem2} />
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Banner;

import React from "react";
import Container from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import Image from "./Image";
import student from "../assets/student.png";
import bannerItem2 from "../assets/banneritem2.png";
import bannerItem3 from "../assets/banneritem3.png";
import { FaStar } from "react-icons/fa";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";

const Banner = () => {
  return (
    <section className="bg-[url('./assets/bannerbg.png')] bg-cover bg-center pt-10 relative ">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0">
            <h2 className="font-saira font-semibold text-sm lg:text-lg text-center lg:text-left text-white">
              Successful coaches are visionaries
            </h2>
            <h3 className="font-rowdies font-bold text-2xl lg:text-[80px] text-center lg:text-left leading-[50px] lg:leading-[90px] text-white mt-5">
              Good <span className="text-[#4BE5CA]">coaching</span> is good
              teaching & nothing else.
            </h3>
            <div className="flex justify-center lg:justify-start items-center gap-5 mt-8">
              <button className="border py-3 px-5 rounded-lg font-saira font-semibold text-white text-sm lg:text-lg">
                View Courses
              </button>
              <p className="font-saira font-medium text-sm lg:text-lg text-white">
                Get Free Consultation
              </p>
            </div>
            <div className="w-full lg:w-[65%] relative mt-[70px]">
              <input
                className=" w-full  font-saira text-sm lg:text-base text-[#4F547B] border rounded-lg py-6 px-4 outline-none"
                type="text"
                placeholder="What do you want to learn today?"
              />
              <button className="flex items-center gap-2 bg-button_bg text-white py-3 px-2 lg:px-5 rounded-lg absolute top-1/2 right-2 lg:right-2 transform -translate-y-1/2">
                <IoSearchOutline className="text-white" />
                <span className="font-saira font-medium text-sm lg:text-base">
                  Search
                </span>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="z-20 relative w-full lg:w-[45%] items-center lg:items-end ">
            <Image src={student} className="" />
            <div className=" mt-7 justify-center  lg:absolute top-[208px] left-[-120px] flex gap-x-4 ">
              <Image src={bannerItem3} />
              <div>
                <h4 className="font-rowdies font-normal text-base text-white">
                  Ronald Richards
                </h4>
                <p className="w-[270px] font-saira font-normal text-sm lg:text-base text-white mt-2">
                  In a coaching role, you ask the questions and rely more on
                  your staff, who become the experts, to provide the
                  information.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <p className="font-saira font-bold text-sm text-[#81C7A2]">
                    4.9
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-[#81C7A2] text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="hidden lg:block absolute bottom-[-43px] left-[50%] translate-x-[-50%]">
        <Image src={b1}  />
      </div>
      <div className="hidden lg:block absolute bottom-[-41px] left-[50%] translate-x-[-50%]">
        <Image src={b3} />
      </div>
      <div className="hidden lg:block absolute bottom-[-40px] left-[50%] translate-x-[-50%]">
        <Image src={b2} />
      </div>
    </section>
  );
};

export default Banner;
