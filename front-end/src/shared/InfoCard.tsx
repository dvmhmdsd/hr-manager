import { Box, Button, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function InfoCard({
  children,
  title,
  action,
}: Readonly<{ children: ReactNode[]; title: string; action: () => void }>) {
  return (
    <Card datatype="main">
      <Box>
        <Typography variant="h3"> {title} </Typography>
        <Button color="primary" onClick={action}>
          Edit
        </Button>
      </Box>
      {children}
    </Card>
  );
}
