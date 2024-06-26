import { useEffect, useState } from "react";

function useCountdown() {
  const today = new Date();
  const endRate = new Date(2024, 5, 30, 23, 59, 59, 999);
  endRate.setFullYear(today.getFullYear());
  const timeLeft = endRate.getTime() - today.getTime();

  const [deadLine, setDeadline] = useState(timeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => setDeadline(deadLine - 1000), 1000);
    return () => clearInterval(intervalId);
  }, [deadLine]);

  const msPerSeconds = 1000;
  const msPerMinutes = 60 * msPerSeconds;
  const msPerHours = 60 * msPerMinutes;
  const msPerDay = 24 * msPerHours;

  const msDaysLeft = deadLine / msPerDay;
  const daysLeft = Math.floor(msDaysLeft);

  const msHoursLeft = deadLine % (daysLeft * msPerDay);
  const hoursLeft = Math.floor(msHoursLeft / msPerHours);

  const msMinutesLeft = msHoursLeft % msPerHours;
  const minutesLeft = Math.floor(msMinutesLeft / msPerMinutes);

  const msSecondsLeft = msMinutesLeft % msPerMinutes;
  const secondsLeft = Math.floor(msSecondsLeft / msPerSeconds);

  return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
}

export default useCountdown;
