import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import userImg from "../assets/userImg.png";

const Testimonials = () => {
  return (
    <section className="my-10 bg-[#F2F2F2] py-[2%] px-[10%]">
      <div className="flex justify-between items-center ">
        <h3 className="text-[#242424] font-bold text-3xl ">Testimonials</h3>
        <div className="flex items-center">
          <CiCircleChevLeft className="text-3xl" />
          <CiCircleChevRight className="text-3xl" />
        </div>
      </div>
      <div className="flex items-center gap-10 mt-10">
        <div className="box-border border-l-2 border-l-[#004464] border-r-2 border-r-[#004464] rounded-r-[30px] rounded-l-none bg-white p-6">
          <div className="flex items-start gap-3">
            <img src={userImg} className="h-10 w-10" />
            <div>
              <h4 className="font-bold">Asharaful Islam</h4>
              <p>SEO Specialist</p>
            </div>
          </div>
          <p>
            I was skeptical about learning Website Development and SEO as a
            beginner, but Bulipe Tech made it so easy. The trainers are
            knowledgeable, and the materials are straightforward.
          </p>
        </div>
        <div className="box-border border-l-2 border-l-[#004464] border-r-2 border-r-[#004464] rounded-r-[30px] rounded-l-none bg-white p-6">
          <div className="flex items-start gap-3">
            <img src={userImg} className="h-10 w-10" />
            <div>
              <h4 className="font-bold">Asharaful Islam</h4>
              <p>SEO Specialist</p>
            </div>
          </div>
          <p>
            I was skeptical about learning Website Development and SEO as a
            beginner, but Bulipe Tech made it so easy. The trainers are
            knowledgeable, and the materials are straightforward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
