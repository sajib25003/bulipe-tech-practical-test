import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import IBM from "../assets/IBM.png";
import hostinger from "../assets/hostinger.png";
import digitalOcean from "../assets/digitalOcean.png";
import microsoft from "../assets/microsoft.png";
import SectionHeading from "../sharedComponents/SectionHeading";

const Partners = () => {
  return (
    <section className="my-10  py-[2%] ">
      <div className="flex justify-between items-center ">
      <SectionHeading title={"Our Partners"}></SectionHeading>

        <div className="flex items-center">
          <CiCircleChevLeft className="text-3xl" />
          <CiCircleChevRight className="text-3xl" />
        </div>
      </div>
      <div className=" flex items-center gap-6 mt-6">
        <p className="text-[#29BDBF] font-normal text-sm">
          Technology Partners
        </p>
        <p className="font-normal text-sm">Branding Partners</p>
        <p className="font-normal text-sm">Training Partners</p>
        <p className="font-normal text-sm">Banking Partners</p>
      </div>
      <div className="flex flex-col md:flex-row items-center  gap-6 py-6">
        <div className="bg-[#A6E2E2] px-6 py-4 rounded-3xl">
            <img src={IBM} className="h-4 w-20 md:h-10 md:w-48  " />
        </div>
        <div className="bg-[#A6E2E2] px-6 py-4 rounded-3xl">
            <img src={hostinger} className="h-4 w-20 md:h-10 md:w-48  " />
        </div>
        <div className="bg-[#A6E2E2] px-6 py-4 rounded-3xl">
            <img src={digitalOcean} className="h-4 w-20 md:h-10 md:w-48  " />
        </div>
        <div className="bg-[#A6E2E2] px-6 py-4 rounded-3xl">
            <img src={microsoft} className="h-4 w-20 md:h-10 md:w-48  " />
        </div>
      </div>
    </section>
  );
};

export default Partners;
