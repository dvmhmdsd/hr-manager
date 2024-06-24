import { Box, Button, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function InfoCard({
  children,
  title,
  action,
}: Readonly<{
  children: ReactNode[] | ReactNode;
  title: string;
  action: () => void;
}>) {
  return (
    <Card component="article" datatype="main">
      <Box
        component="header"
        className="flex flex-row justify-between items-center mb-24"
      >
        <Typography variant="h3"> {title} </Typography>
        <Button
          className="w-[calc(104px)] h-[calc(36px)]"
          color="primary"
          variant="contained"
          onClick={action}
        >
          Edit
        </Button>
      </Box>
      {children}
    </Card>
  );
}
