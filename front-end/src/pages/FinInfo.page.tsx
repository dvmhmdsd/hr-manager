import InfoCard from "../shared/InfoCard";
import { Box, Typography } from "@mui/material";

export default function FinInfo() {
  const bankInfo = [
    { label: "bank Name", value: "CIB" },
    { label: "IBAN", value: "12346546413216446" },
  ];
  return (
    <InfoCard title="Bank Information" action={() => {}} sx={{ mb: "24px" }}>
      <Box className="grid gap-6 grid-cols-4">
        {bankInfo.map(({ label, value }) => (
          <Box key={label}>
            <Typography variant="body2">{label}</Typography>
            <Typography variant="body1">{value}</Typography>
          </Box>
        ))}
      </Box>
    </InfoCard>
  );
}
