import useUrls from "../../hooks/useUrls";
import ResultCard from "../Cards/ResultCard";
import StatCard from "../Cards/StatCard";
import Form from "../Form/Form";
import Heading from "./Heading";
import Section from "./Section";

const Stats = () => {
  const { shortUrls } = useUrls();
  return (
    <Section>
      <Form />
      {shortUrls &&
        shortUrls.map((url, index) => (
          <ResultCard
            key={index}
            longurl={url.longurl}
            shorturl={url.cleanuri}
          />
        ))}
      <Heading />
      <StatCard />
    </Section>
  );
};

export default Stats;
