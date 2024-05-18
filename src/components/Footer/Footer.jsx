import { Link } from "react-router-dom";
import Nav from "./Nav";
import Social from "./Social";
import Attribution from "./Attribution";

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-950">
      <div className="mx-auto w-[90%] max-w-[1440px] py-16 lg:w-[1100px]">
        <div className="flex flex-col items-center justify-between md:items-start lg:flex-row">
          <div className="relative  mb-11 lg:mb-0 lg:w-1/3">
            <Link>
              <img src="/logo.svg" alt="Shortly logo" className="block" />
            </Link>
          </div>

          <div className="relative mb-11 w-full flex-grow lg:mb-0 lg:w-2/3">
            <Nav />
          </div>

          <Social />
        </div>
      </div>
      <Attribution />
    </footer>
  );
};

export default Footer;
