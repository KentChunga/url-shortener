import { Link } from "react-router-dom";

const Text = () => {
  return (
    <div className="relative mx-auto w-full text-center lg:mx-0 lg:w-[566px] lg:text-left">
      <h1 className="mb-5 text-4xl font-bold text-veryDarkViolet lg:text-6xl">
        More than just shorter links
      </h1>
      <p className="mb-10 font-medium text-grayishViolet">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>

      <Link className="rounded-full bg-cyan px-11 py-4 text-center font-bold text-white transition-all duration-300 ease-in-out hover:bg-opacity-80">
        Get Started
      </Link>
    </div>
  );
};

export default Text;
