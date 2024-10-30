import CountdownCard from "./CountdownCard";
import { useEffect, useState } from "react";

const CountdownCardContainer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [flipCard, setFlipCard] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 8); // 8 days from now
    target.setHours(target.getHours() + 23);
    target.setMinutes(target.getMinutes() + 55);
    target.setSeconds(target.getSeconds() + 41);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        // Handle countdown complete scenario
      } else {
        // Update countdown
        const daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursValue = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutesValue = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const secondsValue = Math.floor((difference % (1000 * 60)) / 1000);

        updateTime("days", daysValue.toString().padStart(2, "0"));
        updateTime("hours", hoursValue.toString().padStart(2, "0"));
        updateTime("minutes", minutesValue.toString().padStart(2, "0"));
        updateTime("seconds", secondsValue.toString().padStart(2, "0"));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateTime = (unit: string, newValue: string) => {
    const setter = {
      days: setDays,
      hours: setHours,
      minutes: setMinutes,
      seconds: setSeconds,
    }[unit];

    if (!setter) return;
    setter((prevValue) => {
      if (prevValue !== newValue) {
        triggerFlip(unit);
        return newValue;
      }
      return prevValue;
    });
  };

  const triggerFlip = (unit: string) => {
    setFlipCard((prev) => ({ ...prev, [unit]: true }));
    setTimeout(() => {
      setFlipCard((prev) => ({ ...prev, [unit]: false }));
    }, 450);
  };

  return (
    <div className="relative z-20 mx-auto flex w-full max-w-[688px] justify-between gap-4 px-6 md:gap-8">
      <CountdownCard timeUnit="DAYS" time={days} flipCard={flipCard.days} />
      <CountdownCard timeUnit="HOURS" time={hours} flipCard={flipCard.hours} />
      <CountdownCard
        timeUnit="MINUTES"
        time={minutes}
        flipCard={flipCard.minutes}
      />
      <CountdownCard
        timeUnit="SECONDS"
        time={seconds}
        flipCard={flipCard.seconds}
      />
    </div>
  );
};

export default CountdownCardContainer;
