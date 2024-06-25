import { Card, Box, IconButton, Typography, Divider, List, SxProps, ListItem, ListItemText, Theme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { CameraIcon } from "../Icons";
import userImage from "../assets/person.jpeg";

export const UserCard = () => {
  const loc = useLocation();
  const path = loc.pathname;
  return (
    <Card component="article">
      <Box component="header" className="p-6">
        <Box className="relative rounded-[calc(39px)] w-[calc(120px)] h-[calc(120px)] overflow-hidden">
          <Box
            component="img"
            src={userImage}
            className="absolute"
            sx={{
              top: "-16px", // to position the image inside the container properly, same as object-position: center but object-position doesn't work here
            }}
          />
        </Box>
        <Box
          className="absolute w-10 h-10 text-center"
          sx={{
            left: "16.75rem",
            top: "17rem",
            backgroundColor: "#F0F0F0",
            borderRadius: "50%",
          }}
        >
          <IconButton sx={{ maxWidth: "100%" }}>
            <CameraIcon />
          </IconButton>
        </Box>

        <Typography
          variant="h2"
          sx={{
            mt: (theme: Theme) => theme.spacing(2),
            mb: (theme: Theme) => theme.spacing(1),
          }}
        >
          John Smith
        </Typography>

        <Typography variant="subtitle1">Senior Product Manager</Typography>
      </Box>

      <Divider sx={{ borderColor: "#ECEEF1" }} />

      <List
        sx={{
          py: (theme: Theme) => theme.spacing(2),
          mt: (theme: Theme) => theme.spacing(2),
        }}
      >
        <UserRoutesListItem
          route="/"
          path={path}
          text="Personal Information"
          sx={{
            mb: "4px",
          }}
        />
        <UserRoutesListItem
          route="/financial"
          path={path}
          text="Financial Information"
        />
      </List>
    </Card>
  );
};

const UserRoutesListItem = ({
  route,
  path,
  text,
  sx,
}: {
  route: string;
  path: string;
  text: string;
  sx?: SxProps;
}) => {
  const navigate = useNavigate();
  return (
    <ListItem
      sx={{
        p: (theme: Theme) => theme.spacing(2),
        "&:hover": {
          cursor: "pointer",
          backgroundColor: (theme: Theme) =>
            path === route ? "" : theme.status.active.backgroundColor,
          color: (theme: Theme) =>
            path === route ? "" : theme.status.active.color,
        },
        backgroundColor: (theme: Theme) =>
          path === route ? theme.status.active.backgroundColor : "",
        color: (theme: Theme) =>
          path === route ? theme.status.active.color : "",
        fontWeight: path === route ? "500" : "400",
        borderRadius: "16px",
        ...sx,
      }}
      onClick={() => navigate(route)}
    >
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};
