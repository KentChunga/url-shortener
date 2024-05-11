const Cta = () => {
  return (
    <div className="flex items-center lg:flex-row gap-8 flex-col w-full">
      <button className="bg-transparent border-0  lg:text-grayishViolet text-gray  font-bold hover:bg-transparent">
        Login
      </button>
      <button className="bg-cyan text-white font-bold text-center transition-all duration-300 ease-in-out px-6 rounded-full py-3 lg:py-2 hover:opacity-90 w-full lg:w-fit">
        Sign Up
      </button>
    </div>
  );
};

export default Cta;
