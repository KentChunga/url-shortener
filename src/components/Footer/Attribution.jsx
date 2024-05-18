const Attribution = () => {
  return (
    <div className="w-full bg-slate-900 py-4">
      <div className="mx-auto flex  w-[90%]  max-w-[1440px] flex-col items-center gap-3 text-grayishViolet md:flex-row lg:w-[1100px]">
        <span>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-gray-500 font-bold transition-colors duration-300 ease-in-out hover:text-cyan"
          >
            Frontend Mentor
          </a>
        </span>
        <span>
          Coded by{" "}
          <a
            href="https://github.com/KentChunga"
            target="_blank"
            className="text-gray-500 font-bold transition-colors duration-300 ease-in-out hover:text-cyan"
          >
            Kent Chunga
          </a>
        </span>
      </div>
    </div>
  );
};

export default Attribution;
