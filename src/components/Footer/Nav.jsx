import Item from "./Item";
import List from "./List";

const Nav = () => {
  const items = [
    {
      title: "Features",
      hrefs: [
        { title: "Link Shortening" },
        { title: "Branded Links" },
        { title: "Analytics" },
      ],
    },
    {
      title: " Resources",
      hrefs: [{ title: "Blog" }, { title: "Developers" }, { title: "Support" }],
    },

    {
      title: "Company",
      hrefs: [
        { title: "About" },
        { title: "Our Team" },
        { title: "Careers" },
        { title: "Contact" },
      ],
    },
  ];

  return (
    <nav className="item flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between lg:justify-normal lg:gap-14">
      {items.map((item, index) => (
        <Item key={index} title={item.title}>
          {item.hrefs.map((href, index) => (
            <List key={index} title={href.title} />
          ))}
        </Item>
      ))}
    </nav>
  );
};

export default Nav;
