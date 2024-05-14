/* eslint-disable react/prop-types */

const Button = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type="submit"
      className="w-full rounded-md bg-cyan px-9 py-[9px] text-center font-medium text-white lg:w-1/4"
    >
      Shorten It!
    </button>
  );
};

export default Button;
