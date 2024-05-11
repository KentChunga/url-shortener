/* eslint-disable react/prop-types */
import Cta from "./Cta";
import Item from "./Item";

const List = ({ shoMenu }) => {
  const links = [
    {
      name: "features",
      pathName: "",
    },

    {
      name: "pricing",
      pathName: "",
    },
    {
      name: "resources",
      pathName: "",
    },
  ];

  return (
    <>
      <ul className=" gap-7 lg:relative lg:flex ml-11 items-center hidden  ">
        {links.map((link, index) => (
          <Item key={index} name={link.name} />
        ))}
      </ul>

      <ul
        className={`gap-7 px-6 mx-auto lg:hidden absolute w-full  lg:relative flex flex-col  items-center top-16 inset-x-aut0 py-12 rounded-lg transition-transform duration-300 ease-in-out -translate-x-[150%]  bg-darkViolet border-b text-center ${shoMenu ? "translate-x-0" : ""} `}
      >
        {links.map((link, index) => (
          <Item
            key={index}
            name={link.name}
            textColor="text-gray hover:text-gray"
          />
        ))}

        <Cta />
      </ul>
    </>
  );
};

export default List;
