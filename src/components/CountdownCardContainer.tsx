import CountdownCard from "./CountdownCard";

const CountdownCardContainer = () => {
  return (
    <div className="flex gap-4 md:gap-8 max-w-[688px] w-full mx-auto justify-between px-6 z-20 relative">
      <CountdownCard timeUnit="DAYS" />
      <CountdownCard timeUnit="HOURS" />
      <CountdownCard timeUnit="MINUTES" />
      <CountdownCard timeUnit="SECONDS" />
    </div>
  );
};

export default CountdownCardContainer;
