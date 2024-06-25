import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0F6CBD", // btns color
    },
    secondary: {
      main: "#051D49", // color of sidebar items
      light: "#003FAD", // color of active breadcrumb text
    },
    text: {
      primary: "#151D48", // main text color
    },
    background: {
      default: "#FAFAFA",
      paper: "#fff",
    },
    grey: {
      "600": "#737791",
      "400": "#959FB0",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "26px",
      fontWeight: "600",
      lineHeight: "39px",
      letterSpacing: "0.5px",
      color: "#151D48",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "30px",
      color: "#051D49",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "30px",
      color: "#151D48",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "400",
      color: "#737791",
    },
    subtitle2: {
      fontSize: "18px",
      fontWeight: "400px",
      lineHeight: "27px",
      color: "#051D49",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
    },
    button: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: "400",
      color: "#959FB0",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState: { datatype }, theme }) => ({
          padding: datatype === "side" ? theme.spacing(5) : theme.spacing(3),
          borderRadius: datatype === "side" ? theme.spacing(3) : "20px",
          boxShadow: "0px 4px 20px 0px #EEEEEE80",
        }),
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            boxShadow: "unset",
            padding: "8px 12px",
            textTransform: "capitalize",
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: {},
          style: {
            padding: "8px 12px",
          },
        },
      ],
    },
  },
  spacing: 8,
  status: {
    active: {
      color: "#0F6CBD",
      backgroundColor: "#F4F8FE",
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      active: {
        color: string;
        backgroundColor: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      active?: {
        color?: string;
        backgroundColor?: string;
      };
    };
  }
}

declare module "@mui/material/Card" {
  interface ButtonPropsVariantOverrides {
    side: true;
    main: true;
  }
}
