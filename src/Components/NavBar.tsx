import { useState } from "react";
import navLogo from "../assets/nav-logo.png";
import signUpImg from "../assets/sign-up.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarItems = [
    { name: "About Us", url: "#" },
    { name: "Programs", url: "" },
    { name: "Locations", url: "" },
    { name: "Career & Placement", url: "" },
    { name: "Contact Us", url: "" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      <li>
        <a
          href="#"
          className={`hover:scale-110 font-semibold uppercase ${
            isMenuOpen ? "text-[#F15B2D]" : "text-[#0786C0]"
          }`}
        >
          Home
        </a>
      </li>
      {navbarItems.map((item, index) => (
        <li key={index}>
          <a href={item.url} className="hover:scale-110 font-medium uppercase">
            {item.name}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <nav className="navbar bg-base-100 px-[10%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <button className="btn btn-primary bg-black rounded-2xl">
              Sign Up <img src={signUpImg} />
            </button>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={navLogo} className="h-18" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary bg-[#F15B2D] border-0 p-5 rounded-2xl">
          Sign Up <img src={signUpImg} className="h-5" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
