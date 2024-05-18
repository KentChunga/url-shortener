import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <ul className=" flex flex-row gap-8  text-white">
      <li className="text-white transition-all duration-300 ease-in-out hover:text-cyan">
        <Link>
          <FaFacebookF />
        </Link>
      </li>
      <li className="text-white transition-all duration-300 ease-in-out hover:text-cyan">
        <Link>
          <FaTwitter />
        </Link>
      </li>

      <li className="text-white transition-all duration-300 ease-in-out hover:text-cyan">
        <Link>
          <FaPinterest />
        </Link>
      </li>
      <li className="text-white transition-all duration-300 ease-in-out hover:text-cyan">
        <Link>
          <FaInstagram />
        </Link>
      </li>
    </ul>
  );
};

export default Social;
