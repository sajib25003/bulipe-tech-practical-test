interface SectionHeadingProps {
    title: string;
  }
  
  const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {

    console.log(title, "title");
    return (
      <div>
        <h3 className=" font-bold text-3xl">{title}</h3>
        <hr className="w-20 border-t-2 border-[#F15B2D] mt-2" />
      </div>
    );
  };
  
  export default SectionHeading;
  