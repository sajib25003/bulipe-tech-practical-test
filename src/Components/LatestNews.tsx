import SectionHeading from "../sharedComponents/SectionHeading";
import latestNews from "../assets/latestNews.png";
import {
  BiSolidCaretLeftCircle,
  BiSolidCaretRightCircle,
} from "react-icons/bi";
import featureImg from "../assets/featureNews.png";
import { FaArrowRight } from "react-icons/fa6";

const LatestNews = () => {
  const featureNews = [
    {
      img: featureImg,
      tag: "Technology",
      title:
        "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    {
      img: featureImg,
      tag: "Technology",
      title:
        "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    {
      img: featureImg,
      tag: "Technology",
      title:
        "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
  ];

  return (
    <section className="my-10  py-[2%] px-[10%]">
      <SectionHeading title={"Latest News"}></SectionHeading>

      <div className="flex flex-col md:flex-row bg-[#F2F2F2] mt-6 rounded-t-2xl md:rounded-l-2xl">
        <img src={latestNews} className="md:h-1/2 md:w-2/5 rounded-t-2xl md:rounded-l-2xl" />
        <div className="p-3">
          <p className="bg-[#E6ECEF] p-2 text-[#004464] rounded-lg w-[130px]">
            Current Events
          </p>

          <h3 className="text-lg md:text-xl font-semibold">
            Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10
            with no penalty
          </h3>

          <p className="text-[#848484] text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <h4 className="font-semibold">Featured News</h4>
        <div className="flex items-center gap-3 text-3xl">
          <BiSolidCaretLeftCircle />
          <BiSolidCaretRightCircle />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {featureNews.map((news, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 border-2 border-gray-200 rounded-b-2xl"
          >
            <img src={news.img} />
            <div className="p-3">
              <p className="text-[#242424] text-sm">{news.tag}</p>
              <h4 className="text-lg font-semibold">{news.title}</h4>
              <p className="text-[#848484] text-sm">{news.description}</p>
              <button className="flex items-center gap-2 btn btn-outline border-[#004464] text-[#004464] rounded-2xl mt-6">
                Read More <FaArrowRight />
              </button>
              
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
