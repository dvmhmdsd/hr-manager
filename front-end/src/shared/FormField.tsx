import { Control, Controller } from "react-hook-form";
import { IFormInputs } from "../Constants/FormInputs.interface";
import { Box, TextField, Typography } from "@mui/material";

export const FormField = ({
  label,
  name,
  control,
  value,
}: {
  label: string;
  name: keyof IFormInputs;
  value: string;
  control: Control<IFormInputs, string>;
}) => (
  <Box className="flex flex-col gap-1 mb-4">
    <Typography variant="body2">{label}</Typography>
    <Controller
      name={name}
      defaultValue={value}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          {...field}
          helperText={
            name === "additionalNationalities"
              ? "Add all nationalities with , separated. e.g Egypt, USA, ...etc"
              : ""
          }
        />
      )}
    />
  </Box>
);
