import { useState } from "react";

const ResultCard = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };
  return (
    <div className="items mb-8 flex w-full flex-col rounded-md bg-white  md:items-center lg:flex-row lg:justify-between lg:px-6 lg:py-4">
      <div className="mb-1 border-b border-b-gray p-4 pb-2 font-medium text-darkViolet  sm:mb-0 md:pb-0 lg:border-0 lg:p-0">
        localhost
      </div>
      <div className="mx-4 flex  flex-col gap-5 pb-4 pt-3 lg:mx-0 lg:flex-row lg:items-center lg:pb-0">
        <span className="font-medium text-cyan">localhost</span>
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
