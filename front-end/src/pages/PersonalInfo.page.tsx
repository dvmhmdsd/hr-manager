import { Box, Button, Typography } from "@mui/material";
import InfoCard from "../shared/InfoCard";
import { FileIcon } from "../shared/Icons";
import { useInfo } from "../hooks/useInfo";

export default function PersonalInfo() {
  const { userInfo } = useInfo();

  return (
    <>
      {Object.entries(userInfo).map(([title, infoData]) => (
        <InfoCard
          title={title}
          action={() => {}}
          key={title}
          sx={{ mb: "24px", p: "40px", borderRadius: "20px" }}
        >
          <Box className="grid gap-6 grid-cols-4">
            {infoData.map(({ label, value, type }) => (
              <Box key={label}>
                <Typography variant="body2">{label}</Typography>
                {type === "file" ? (
                  <Button
                    startIcon={<FileIcon />}
                    sx={{
                      maxWidth: "100%",
                      textTransform: "initial",
                      backgroundColor: "#ECECEC",
                    }}
                  >
                    <Typography variant="body1">{value}</Typography>
                  </Button>
                ) : (
                  <Typography variant="body1">{value}</Typography>
                )}
              </Box>
            ))}
          </Box>
        </InfoCard>
      ))}
    </>
  );
}
