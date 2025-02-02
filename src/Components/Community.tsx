import SectionHeading from "../sharedComponents/SectionHeading";

const Community = () => {
  return (
    <section className="my-10 bg-[#000] py-[2%] px-[10%]">
      <div className="text-white">
        <SectionHeading title={"Our Community"}></SectionHeading>
      </div>

      <div className="w-full md:w-1/2 mt-6">
        <p className="text-white opacity-80">
          Bulipe Tech aims to train unemployed individuals in Bangladesh,
          equipping them with essential digital skills and linking them a job
          opportunities across 23 countries worldwide
        </p>
      </div>
      <div className="bg-gradient-to-b from-teal-500 to-white p-[1px]  rounded-2xl mt-6">
        <div className="flex flex-col md:flex-row items-center justify-center border  text-white bg-black rounded-2xl ">
          <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-teal-200 px-6 py-4 md:py-6 lg:py-10">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold">3K+</p>
            <p className="text-sm md:text-lg text-white/80">Global partners worldwide</p>
          </div>

          <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-teal-200 px-6 py-4 md:py-6 lg:py-10">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold">23+</p>
            <p className="text-sm md:text-lg text-white/80">Countries and adding</p>
          </div>

          <div className="flex-1 text-center px-6 py-4 md:py-6 lg:py-10">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold">300+</p>
            <p className="text-sm md:text-lg text-white/80">Local training partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
