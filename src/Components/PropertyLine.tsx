import { Box, Typography } from "@mui/material";

export default function PropertyLine({
  property,
  value,
}: {
  property: string;
  value: string;
}) {
  return (
    <Box display={"flex"} justifyContent={"space-between"} gap={40}>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
        {property}
      </Typography>
      <Typography gutterBottom>{value}</Typography>
    </Box>
  );
}
