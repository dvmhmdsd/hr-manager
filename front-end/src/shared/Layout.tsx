import { ReactNode } from "react";
import Header from "./LayoutComponents/Header";
import Sidebar from "./LayoutComponents/Sidebar";
import { Box } from "@mui/material";
import { UserCard } from "./LayoutComponents/UserCard";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode[] | ReactNode;
}>) {
  return (
    <>
      <Header />
      <Sidebar />
      <Box
        component="main"
        className="ml-[calc(108px)] grid gap-6 px-6 mt-6"
        sx={{
          gridTemplateColumns: "1fr 3fr",
        }}
      >
        <UserCard />
        <Box component="section">{children}</Box>
      </Box>
    </>
  );
}
