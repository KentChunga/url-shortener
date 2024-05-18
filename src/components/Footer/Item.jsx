/* eslint-disable react/prop-types */
const Item = ({ title, children }) => {
  return (
    <ul className="flex flex-col text-center md:text-left">
      <h3 className="mb-4 font-bold text-white">{title}</h3>
      <div>{children}</div>
    </ul>
  );
};

export default Item;
