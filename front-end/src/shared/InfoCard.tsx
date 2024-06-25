import { Box, Button, Card, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function InfoCard({
  children,
  title,
  action,
  sx,
}: Readonly<{
  children: ReactNode[] | ReactNode;
  title: string;
  action: () => void;
  sx?: SxProps;
}>) {
  return (
    <Card component="article" sx={sx}>
      <Box
        component="header"
        className="flex flex-row justify-between items-center mb-6"
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
