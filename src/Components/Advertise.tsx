const Advertise = () => {
  return (
    <section className="bg-[#29BDBF] p-4 md:p-16 lg:p-28 flex flex-col md:flex-row justify-center gap-2 md:gap-6 lg:gap-10">
      <div className="border-b-2 md:border-b-0 md:border-r-2 pr-4">
        <h4 className="font-bold text-lg md:text-xl lg:text-3xl">Ready to start your <br className="hidden md:flex" /> career?</h4>
      </div>
      <div>
        <p className="text-white font-semibold">We are waiting for you to contact us</p>
        <p className="text-white font-light">If you have any query call us at any of the following number</p>
        <p className="font-medium">01825 004 976, 01804 181 257</p>
      </div>
    </section>
  );
};

export default Advertise;
