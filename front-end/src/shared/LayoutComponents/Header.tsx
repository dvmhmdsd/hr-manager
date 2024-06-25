import { Box, Typography } from "@mui/material";
import { HeaderIcons } from "./HeaderIcons";
import { BreadCrumb } from "./BreadCrumb";

export default function Header() {
  return (
    <Box
      component="nav"
      className="flex justify-between items-center py-6 px-10 ml-[calc(108px)]"
    >
      <Box component="section">
        <Typography className="mb-4" variant="h1">
          John Smith Profile
        </Typography>
        <BreadCrumb />
      </Box>
      <HeaderIcons />
    </Box>
  );
}
