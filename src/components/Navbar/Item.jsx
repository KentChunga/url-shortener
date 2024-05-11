/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Item = ({
  name,
  textColor = "text-grayishViolet hover:text-veryDarkBlue",
}) => {
  return (
    <li
      className={`${textColor} capitalize font-bold transition-all duration-300 ease-in-out w-full last-of-type:border-b border-gray last-of-type:pb-6 lg:last-of-type:border-b-0 lg:last-of-type:pb-0`}
    >
      <Link to={"/"}>{name}</Link>
    </li>
  );
};

export default Item;
