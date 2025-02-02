import { FaApple, FaGooglePlay, FaXTwitter } from "react-icons/fa6";
import companyImg from "../assets/company-img.png";
import {
  FaArrowAltCircleRight,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiCloudArrowUpFill } from "react-icons/pi";

const Footer2 = () => {
  const quickLinks = [
    { name: "Home", url: "" },
    { name: "About Us", url: "" },
    { name: "Our Programs", url: "" },
    { name: "Career & Placement", url: "" },
    { name: "Contact Us", url: "" },
    { name: "News & Media", url: "" },
    { name: "Privacy & Policy", url: "" },
  ];
  return (
    <footer className="bg-[#001823] text-white flex flex-col md:flex-row gap-5 px-4 lg:px-32  py-10">
      <div className="">
        <div className="flex flex-col gap-3">
          <img src={companyImg} className="h-10 w-[80%]" />
          <p className="text-sm">
            Bulipe Tech as a visionary agent collaborates with its parent
            companies from the US and UK to bring forth a far-reaching Digital
            Skills Development project for the everchanging workforce of
            Bangladesh. (Footer)
          </p>
          <div className="flex gap-5 items-center">
            <div className="rounded-full bg-white text-black h-10 w-10 flex justify-center items-center font-bold">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full bg-white text-black h-10 w-10 flex justify-center items-center font-bold">
              <FaXTwitter />
            </div>
            <div className="rounded-full bg-white text-black h-10 w-10 flex justify-center items-center font-bold">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[20%] space-y-2">
        <h3 className="uppercase font-bold text-lg md:text-xl mb-6">Addresses</h3>
        <p className="flex items-center gap-3">
          <FaPhoneAlt /> 01712 944 876
        </p>
        <p className="flex items-center gap-3">
          <MdEmail /> info@bulipetech.com
        </p>
        <p className="flex items-start gap-3">
          <FaMapMarkerAlt /> House: 82, Road: 23/16,
          <br /> Block: A, Banani, <br />
          Dhaka-1213
        </p>
        <h3 className="uppercase font-bold text-[#F15B2D] text-md mb-6 flex gap-3 items-center">
          Country Offices <PiCloudArrowUpFill />
        </h3>
      </div>
      <div className="min-w-[20%] space-y-2">
        <h3 className="uppercase font-bold text-lg md:text-xl mb-6">Quick Links</h3>

        <ul className="space-y-2">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a
                className="flex text-[#F15B2D] text-sm  md:font-bold items-center gap-3 uppercase"
                href={link.url}
              >
                <FaArrowAltCircleRight />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="min-w-[20%] space-y-2">
        <h3 className="uppercase font-bold text-lg md:text-xl mb-6">Get the app</h3>
        <div  className="space-y-3 flex flex-row md:flex-col justify-center md:justify-start gap-2">
          <button className="btn btn-primary bg-gray-800 px-2   py-8 border-none rounded-3xl">
            <FaApple className="text-xl md:text-3xl"/>
            <p >
              Download on the <br />
              <span className="text-lg md:text-xl font-bold">App Store</span>
            </p>
          </button>
          <button className="btn btn-primary bg-gray-800 px-2   py-8 border-none rounded-3xl">
            <FaGooglePlay className="text-xl md:text-3xl"/>
            <p >
              Download on the <br />
              <span className="text-lg md:text-xl font-bold">Google Play</span>
            </p>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
