/* eslint-disable react/prop-types */
const Section = ({ children }) => {
  return (
    <section className="relative w-full bg-gray">
      <div className="mx-auto w-[90%] pb-[117px] lg:w-[1100px]">{children}</div>
    </section>
  );
};

export default Section;
