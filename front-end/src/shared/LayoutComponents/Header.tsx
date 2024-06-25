import { Badge, Box, IconButton, Theme, Typography } from "@mui/material";
import {
  ForwardIcon,
  MailIcon,
  NotificationIcon,
  SettingsIcon,
} from "../Icons";
import personImg from "../../assets/nav-person.png";

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

const BreadCrumb = () => {
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

const HeaderIcons = () => {
  const headerItems = [
    {
      key: 1,
      component: (
        <IconButton
          sx={{
            ".MuiBadge-badge": {
              backgroundColor: "linear-gradient(#B22234, #FF0020)",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              top: "3px",
              right: "5px",
            },
          }}
        >
          <Badge variant="dot" color="error" sx={{}}>
            <NotificationIcon />
          </Badge>
        </IconButton>
      ),
    },
    {
      key: 1,
      component: (
        <IconButton>
          <MailIcon />
        </IconButton>
      ),
    },
    {
      key: 1,
      component: (
        <IconButton>
          <SettingsIcon />
        </IconButton>
      ),
    },
    {
      key: 1,
      component: <Box component="img" src={personImg} className="w-10 h-10 hover:cursor-pointer" />,
    },
  ];
  return (
    <Box className="flex gap-4">
      {headerItems.map((item) => (
        <Box key={item.key}>{item.component}</Box>
      ))}
    </Box>
  );
};
