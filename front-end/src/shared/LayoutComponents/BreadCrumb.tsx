import { Box, Theme, Typography } from "@mui/material";
import { ForwardIcon } from "../Icons";

export const BreadCrumb = () => {
  const breadcrumbItems = [
    { text: "Dashboard", status: 0 },
    { text: "HR manage", status: 0 },
    { text: "Employees", status: 0 },
    { text: "John Smith Profile", status: 1 },
  ];
  return (
    <Box className="flex items-center">
      {breadcrumbItems.map((item) => (
        <Box
          key={item.text}
          sx={{
            "& > svg": {
              width: "10px",
              height: "10px",
              display: "inline-block",
              mx: "10px",
            },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: (theme: Theme) =>
                item.status === 1 ? theme.palette.secondary.light : "",
            }}
          >
            {item.text}
          </Typography>
          {!item.status && <ForwardIcon />}
        </Box>
      ))}
    </Box>
  );
};
