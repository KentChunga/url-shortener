/* eslint-disable react/prop-types */
const Section = ({ children }) => {
  return (
    <section className="relative w-full bg-gray pb-[90px]">
      <div className="relative mx-auto w-[90%] pt-[117px] lg:w-[1100px] lg:pb-[117px]">
        {children}
      </div>
    </section>
  );
};

export default Section;
