import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import ShortlyLogo from "../../../public/images/logo.svg";
import List from "./List";
import CTA from "./Cta";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMobileMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex items-center relative justify-between w-[90%] lg:w-[1100px] mx-auto">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={ShortlyLogo} alt="Shortly company logo" />
        </Link>
        <List shoMenu={toggle} />
      </div>

      <div className="hidden lg:block">
        <CTA />
      </div>
      <FaBars
        className="w-8 h-6 lg:hidden cursor-pointer"
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Nav;
