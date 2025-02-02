import { FaArrowCircleRight } from "react-icons/fa";
import whatWeDoImg from "../assets/whatWeDoImg.png"

const WhatWeDo = () => {
  return (
    <section className="my-10  py-[2%] px-[10%]">
      <div className="flex flex-col justify-center w-full items-center mt-10">
        <h3 className=" font-bold text-3xl">What We Do</h3>
        <hr className=" text-center w-20 border-t-2 border-[#F15B2D] mt-2" />
      </div>

      <div className="grid grid-cols-3">
        <div className="bg-[#A6E2E2] p-8 py-10 space-y-2">
          <h3 className="font-bold text-xl">Bulipe Tech is a dynamic and innovative company</h3>
          <p className=" opacity-70">
            We empower individuals to unlock career opportunities through our
            proven Digital Skill Development program. Partnering with 300 local
            organisations and 3,000+ global partners in 21 countries, we provide
            access to top U.S. certifications and salary-based employment
            starting at $250, with the potential to exceed $3,000 through
            continuous up-skilling.
          </p>
          <button className="flex items-center gap-2 btn btn-outline bg-[#004464] border-[#004464] text-white rounded-2xl mt-6">
            Read More <FaArrowCircleRight className="text-xl"/>
          </button>
        </div>
        <div className="col-span-2">
            <img src={whatWeDoImg} className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
