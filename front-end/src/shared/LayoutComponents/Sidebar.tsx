import {
  Box,
  CSSObject,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useState } from "react";
import Logo from "../../assets/Preformly Logo.png";
import {
  BoxIcon,
  ChartIcon,
  DocumentIcon,
  FriendsIcon,
  HomeIcon,
} from "../Icons";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "108px",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const barItems = [
    { icon: HomeIcon, text: "Home" },
    { icon: ChartIcon, text: "Test 1" },
    { icon: DocumentIcon, text: "Test 2" },
    { icon: FriendsIcon, text: "Test 3" },
    { icon: BoxIcon, text: "Test 4" },
  ];
  const getBarItem = (index: number, color: string) => {
    return barItems[index].icon({ customColor: color });
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        borderRight: "1px solid #E7EAEE",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Box component="header" className="mx-auto my-10">
        <Box component="img" src={Logo} />
      </Box>

      <List sx={{
        p: '0'
      }}>
        {barItems.map((item, index) => {
          const isActive = activeItem === index;
          const itemIcon = getBarItem(index, isActive ? "#fff" : "#737791");
          return (
            <ListItem
              key={item.text}
              onClick={() => setActiveItem(index)}
              className="hover:cursor-pointer hover:bg-slate-200"
            >
              <ListItemIcon
                className="p-3 rounded-2xl"
                sx={{
                  backgroundColor: (theme: Theme) =>
                    isActive ? theme.palette.secondary.light : "transparent",
                  minWidth: "unset",
                  mx: "auto",
                }}
              >
                {itemIcon}
              </ListItemIcon>
              {open && (
                <ListItemText className="pl-14">{item.text}</ListItemText>
              )}
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
