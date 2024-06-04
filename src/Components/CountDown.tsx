import { Box, Typography } from "@mui/material";
import useCountdown from "../Hooks/useCountdown";

export default function CountDown() {
  const remain = useCountdown();
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="6"
      >
        <Typography variant="h5" gutterBottom>
          Time left to vote:
        </Typography>
        <Typography variant="h3">
          {remain.daysLeft} days, {remain.hoursLeft} hours, {remain.minutesLeft}{" "}
          minutes, {remain.secondsLeft} seconds
        </Typography>
      </Box>
    </>
  );
}
