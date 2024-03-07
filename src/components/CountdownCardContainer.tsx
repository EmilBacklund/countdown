import CountdownCard from "./CountdownCard";
import { useEffect, useState } from "react";

const CountdownCardContainer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

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
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(days.toString().padStart(2, "0"));
        setHours(hours.toString().padStart(2, "0"));
        setMinutes(minutes.toString().padStart(2, "0"));
        setSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 max-w-[688px] w-full mx-auto justify-between px-6 z-20 relative">
      <CountdownCard timeUnit="DAYS" time={days} />
      <CountdownCard timeUnit="HOURS" time={hours} />
      <CountdownCard timeUnit="MINUTES" time={minutes} />
      <CountdownCard timeUnit="SECONDS" time={seconds} />
    </div>
  );
};

export default CountdownCardContainer;
