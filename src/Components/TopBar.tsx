
const TopBar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 lg:gap-20 bg-[#A6E2E2] py-4 px-4 md:px-10 lg:px-0">
        <h2 className="bg-gradient-to-b from-red-500 to-yellow-400 text-transparent bg-clip-text text-3xl md:4xl lg:text-[64px] font-bold">
          100%
        </h2>
        <p className="text-lg md:text-xl font-semibold text-[#014463] border-2 border-[#004464] rounded-[10px] p-2">
          <span className="text-[#F15B2D]">Scholarship</span> on all <br className="hidden lg:flex"/> of
          our programs
        </p>
        <p className="text-[#014463] text-lg text-center md:text-left">
          Exclusively for the physically challenged, and third-gender
          communities!
        </p>
      </div>
    );
};

export default TopBar;