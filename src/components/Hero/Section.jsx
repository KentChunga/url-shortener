/* eslint-disable react/prop-types */
const Section = ({ children }) => {
  return (
    <section className="hero-image py-20 relative items-center flex flex-col-reverse lg:flex-row ">
      {children}
    </section>
  );
};

export default Section;
