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
        className="flex w-full flex-col rounded-md bg-white px-8 text-center md:last:mt-4 lg:w-[352px] lg:text-left lg:last:translate-y-[86px] lg:even:translate-y-[43px]"
      >
        <div className="relative flex h-[88px] w-[88px] -translate-y-1/2 items-center  justify-center self-center rounded-full bg-darkViolet lg:self-start">
          <img src={stat.icon} alt={stat.title} />
        </div>

        <h3 className="mb-4 text-2xl font-bold text-veryDarkBlue">
          {stat.title}
        </h3>
        <p className="pb-[47px] text-grayishViolet">{stat.description}</p>
      </div>
    );
  });

  return (
    <div className="relative flex w-full flex-col md:flex-row">
      <div className="relative flex flex-col lg:flex-row">
        <div className="relative z-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:flex-row lg:grid-cols-3 lg:gap-7">
          {cards}
        </div>
        <div className="absolute left-[49%] right-1/2 h-4/5 w-2.5 bg-cyan md:hidden lg:inset-x-0 lg:top-1/2 lg:block lg:h-2.5 lg:w-4/5"></div>
      </div>
    </div>
  );
};

export default StatCard;
