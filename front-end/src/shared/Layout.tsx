import { ReactNode } from "react";
import Header from "./LayoutComponents/Header";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode[] | ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
