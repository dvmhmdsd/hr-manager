import { Box, Button, Card, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useInfo } from "../hooks/useInfo";
import { IFormInputs } from "../Constants/FormInputs.interface";
import { FormField } from "../shared/FormField";

export default function EditBasicInfo() {
  const { userInfo } = useInfo();
  const formFields = userInfo["Basic Information"].filter(
    (field) => !!field.name
  );

  const { handleSubmit, control } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <Card sx={{ mb: "24px", p: "40px", borderRadius: "20px" }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Edit Basic Info
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="flex flex-wrap gap-4 mb-6">
          {formFields.map(({ label, name, value }) => (
            <FormField
              key={label}
              label={label}
              name={name! as keyof IFormInputs}
              value={value}
              control={control}
            />
          ))}
        </Box>
        <Button
          className="w-[calc(104px)] h-[calc(36px)]"
          color="primary"
          variant="contained"
          type="submit"
        >
          Edit
        </Button>
      </form>
    </Card>
  );
}
