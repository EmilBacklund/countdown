interface CountdownCardProps {
  timeUnit: string;
  time: string;
  flipCard: boolean;
}

const CountdownCard = ({ timeUnit, time, flipCard }: CountdownCardProps) => {
  return (
    <div className="flipCardGroup group relative flex flex-1 flex-col gap-4">
      <div className="rounded-lg bg-[#191A23] pb-[4.73px] md:pb-2.5">
        <div className="relative overflow-hidden rounded-lg bg-[#343650] pb-[14.27px] pt-[14px] md:pb-[35px] md:pt-[34px]">
          <p className="text-center text-4xl font-bold leading-[36px] tracking-[-1.08px] text-[#FB5E84] md:text-[80px] md:leading-[80px] md:tracking-[-2.4px]">
            {time}
          </p>
          <div className="absolute -left-[3px] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[#191A23] md:-left-1.5 md:size-3"></div>
          <div className="absolute -right-[3px] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[#191A23] md:-right-1.5 md:size-3"></div>
          <div className="absolute left-0 top-0 h-1/2 w-full bg-black/[15.06%]"></div>
        </div>
      </div>
      <div
        className={`absolute z-20 h-1/2 w-full overflow-hidden rounded-lg bg-[#191A23] pb-[4.73px] md:pb-2.5 ${flipCard ? "flipCard" : ""}`}
      >
        <div className="relative overflow-hidden rounded-lg bg-[#343650] pb-[14.27px] pt-[14px] md:pb-[35px] md:pt-[34px]">
          <p className="text-center text-4xl font-bold leading-[36px] tracking-[-1.08px] text-[#FB5E84] md:text-[80px] md:leading-[80px] md:tracking-[-2.4px]">
            {time}
          </p>
          <div className="absolute -left-[3px] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[#191A23] md:-left-1.5 md:size-3"></div>
          <div className="absolute -right-[3px] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[#191A23] md:-right-1.5 md:size-3"></div>
          <div className="absolute left-0 top-0 h-1/2 w-full bg-black/[15.06%]"></div>
        </div>
      </div>
      <h2 className="text-center text-[7px] font-bold tracking-[2.96px] text-[#8385A9] md:text-sm md:tracking-[5.92px]">
        {timeUnit}
      </h2>
    </div>
  );
};

export default CountdownCard;
