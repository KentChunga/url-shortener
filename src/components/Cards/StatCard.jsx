const StatCard = () => {
  const stats = [
    {
      title: "Brand Recognition",
      icon: "/images/icon-brand-recognition.svg",
      description:
        "Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content.",
    },
    {
      title: "Detailed Records",
      icon: "/images/icon-detailed-records.svg",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      title: "Fully Customizable",
      icon: "/images/icon-fully-customizable.svg",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  const cards = stats.map((stat, index) => {
    return (
      <div
        key={index}
        className="flex w-full flex-col rounded-md bg-white px-8 text-center last:translate-y-[86px] even:translate-y-[43px] md:w-[352px] lg:text-left"
      >
        <div className="relative flex h-[88px] w-[88px] -translate-y-1/2 items-center  justify-center self-center rounded-full bg-darkViolet md:self-start">
          <img src={stat.icon} alt={stat.title} />
        </div>

        <h3 className="mb-4 font-bold text-veryDarkBlue">{stat.title}</h3>
        <p className="pb-[47px] text-gray">{stat.description}</p>
      </div>
    );
  });

  return (
    <div className="relative  flex w-full flex-col md:flex-row">
      <div className="z-10 flex w-full flex-col gap-10 md:flex-row lg:gap-7">
        {cards}
      </div>
      <div className="absolute top-1/2 w-full rotate-90 border-t-8 border-cyan lg:rotate-0"></div>
    </div>
  );
};

export default StatCard;
