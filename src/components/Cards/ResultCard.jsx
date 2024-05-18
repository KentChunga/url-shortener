/* eslint-disable react/prop-types */
import { useState } from "react";

const ResultCard = ({ longurl, shorturl }) => {
  const windowWidth = window.innerWidth <= 799 ? true : false;
  const [click, setClick] = useState(false);

  let slicedUrl = windowWidth ? longurl.slice(0, 30) + "..." : longurl;

  const handleClick = () => {
    navigator.clipboard.writeText(shorturl);
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 3000);
  };
  return (
    <div className="items mb-8  flex w-full flex-col gap-5 rounded-md bg-white  lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-4">
      <div className="mb-1 w-full border-b border-b-gray p-4 pb-2 font-medium  lowercase text-darkViolet sm:mb-0 lg:border-0 lg:p-0 lg:pb-0 ">
        {slicedUrl}
      </div>
      <div className="mx-4 flex  flex-col gap-5 pb-4 lg:mx-0 lg:flex-row lg:items-center lg:pb-0 lg:pt-0">
        <span className="font-medium lowercase text-cyan">{shorturl}</span>
        <button
          role="button"
          onClick={handleClick}
          className={`rounded-md bg-cyan px-7 py-2 text-center font-bold text-white transition-all duration-300 ease-in-out hover:opacity-85 ${click ? "text-whites bg-darkViolet" : ""}`}
        >
          {click ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
