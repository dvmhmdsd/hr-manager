import { Box, Button, Card, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useInfo } from "../hooks/useInfo";
import { IFormInputs } from "../Constants/FormInputs.interface";
import { FormField } from "../shared/FormField";
import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditBasicInfo() {
  const [isLoading, setIsLoading] = useState(false);

  const { userInfo } = useInfo();
  const formFields = userInfo["Basic Information"].filter(
    (field) => !!field.name
  );

  const { handleSubmit, control } = useForm<IFormInputs>();
  const { updateUser, client } = useApi();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log(data);
    const userData = {
      ...data,
      dependants: Number(data.dependants),
      nationalities: data.nationalities + data.additionalNationalities!,
    };

    delete userData.additionalNationalities;

    try {
      setIsLoading(true);
      await updateUser({
        variables: {
          id: 1234,
          input: userData,
        },
      });
      setIsLoading(false);
      client.resetStore();
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <Card sx={{ mb: "24px", p: "40px", borderRadius: "20px" }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Edit Basic Info
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="flex flex-wrap gap-4 mb-6">
          {formFields.map(({ label, name, value, key }) => (
            <FormField
              key={key}
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
          disabled={isLoading}
        >
          {isLoading ? "Submitting ..." : "Edit"}
        </Button>
      </form>
    </Card>
  );
}
