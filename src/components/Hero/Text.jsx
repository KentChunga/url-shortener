import { Link } from "react-router-dom";

const Text = () => {
  return (
    <div className="lg:w-[566px] relative text-center lg:text-left">
      <h1 className="text-veryDarkViolet font-bold text-6xl mb-5">
        More than just shorter links
      </h1>
      <p className="text-grayishViolet font-medium mb-10">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>

      <Link className="rounded-full text-center bg-cyan text-white px-11 py-4 font-bold transition-all duration-300 ease-in-out hover:bg-opacity-80">
        Get Started
      </Link>
    </div>
  );
};

export default Text;
