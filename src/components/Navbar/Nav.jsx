import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import ShortlyLogo from "/images/logo.svg";
import List from "./List";
import CTA from "./Cta";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMobileMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="relative mx-auto flex h-full w-[90%] items-center justify-between lg:w-[1100px]">
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
        className="h-6 w-8 cursor-pointer lg:hidden"
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Nav;
