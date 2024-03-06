interface CountdownCardProps {
  timeUnit: string;
}

const CountdownCard = ({ timeUnit }: CountdownCardProps) => {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="bg-[#191A23] pb-[4.73px] md:pb-2.5 rounded-lg">
        <div className="bg-[#343650] pt-[14px] md:pt-[34px] pb-[14.27px] md:pb-[35px] rounded-lg  overflow-hidden relative">
          <p className="text-4xl leading-[36px] md:text-[80px] md:leading-[80px] font-bold text-[#FB5E84] text-center md:tracking-[-2.4px] tracking-[-1.08px]">
            08
          </p>
          <div className="bg-[#191A23] rounded-full md:size-3 size-1.5 absolute top-1/2 -translate-y-1/2 md:-left-1.5 -left-[3px]"></div>
          <div className="bg-[#191A23] rounded-full md:size-3 size-1.5 absolute top-1/2 -translate-y-1/2 md:-right-1.5 -right-[3px]"></div>
          <div className="h-1/2 w-full top-0 left-0 absolute bg-black/[15.06%]"></div>
        </div>
      </div>
      <h2 className="text-[#8385A9] md:tracking-[5.92px] tracking-[2.96px] font-bold md:text-sm text-[7px] text-center">
        {timeUnit}
      </h2>
    </div>
  );
};

export default CountdownCard;
