import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (

    <nav className="bg-gradient-to-r from-black to-gray-800 text-white h-16 ">
      <div className="logo font-bold "><img src="./image/logos/img2.png" alt="" className="pt-2"/></div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links font-semibold ">
          <Link to="hero" spy={true} smooth={true} duration={300} className="hover:text-cyan-300">
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-cyan-300">
            EVENTS
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-cyan-300">
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="mr-6 hover:text-cyan-300">
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
