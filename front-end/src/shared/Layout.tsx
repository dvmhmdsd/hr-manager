import { ReactNode } from "react";
import Header from "./LayoutComponents/Header";
import Sidebar from "./LayoutComponents/Sidebar";
import { Box } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode[] | ReactNode;
}>) {
  return (
    <>
      <Header />
      <Sidebar />
      <Box component="main" className="ml=[calc(108px)]">
        {children}
      </Box>
    </>
  );
}
