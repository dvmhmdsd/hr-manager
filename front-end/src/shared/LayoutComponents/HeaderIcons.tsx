import { Badge, Box, IconButton } from "@mui/material";
import { MailIcon, NotificationIcon, SettingsIcon } from "../Icons";
import personImg from "../../assets/nav-person.png";

export const HeaderIcons = () => {
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