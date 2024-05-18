/* eslint-disable react/prop-types */
const Section = ({ children }) => {
  return (
    <section className="relative w-full bg-veryDarkBlue bg-[url('/images/bg-boost-mobile.svg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/images/bg-boost-desktop.svg')]">
      <div className="mx-auto w-[90%] py-[76px] text-center lg:w-[1100px]">
        {children}
      </div>
    </section>
  );
};

export default Section;
