/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const List = ({ title }) => {
  return (
    <li className="pb-3 font-medium text-grayishViolet transition-all duration-300 ease-in-out last-of-type:pb-0 hover:text-cyan">
      <Link>{title}</Link>
    </li>
  );
};

export default List;
