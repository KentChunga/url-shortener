import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Boost your links today
      </h2>
      <Link className="rounded-[30px] bg-cyan px-7 py-3 text-center font-bold text-white transition-all duration-300 ease-in-out hover:opacity-80">
        {" "}
        Get Started
      </Link>
    </div>
  );
};

export default Cta;
