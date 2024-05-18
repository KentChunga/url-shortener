import { useContext } from "react";
import UrlContext from "../contexts/UrlContext";

const useUrls = () => {
  return useContext(UrlContext);
};

export default useUrls;
