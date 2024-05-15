/* eslint-disable react/prop-types */
const Section = ({ children }) => {
  return (
    <section className="relative w-full">
      <div className="relative mx-auto mb-16 mt-12 flex w-[90%] flex-col-reverse items-center bg-white py-20 lg:mb-0 lg:w-[1100px] lg:flex-row">
        {children}
      </div>
    </section>
  );
};

export default Section;
