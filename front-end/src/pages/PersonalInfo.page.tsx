import { Box, Button, Typography } from "@mui/material";
import InfoCard from "../shared/InfoCard";
import { FileIcon } from "../shared/Icons";

export default function PersonalInfo() {
  const userInfo = {
    "Basic Information": [
      { label: "National ID Number", type: "", value: "29702031400693" },
      { label: "National ID Expiring Date", type: "", value: "01/ 04 / 2025" },
      { label: "Title", type: "", value: "Mr." },
      { label: "", type: "", value: "" },
      { label: "First Name", type: "", value: "John" },
      { label: "Father Name", type: "", value: "John" },
      { label: "Grand Father Name", type: "", value: "John" },
      { label: "Family Name", type: "", value: "Smith" },
      { label: "الإسم الأول", type: "", value: "جون" },
      { label: "اسم الأب", type: "", value: "جون" },
      { label: "اسم الجد", type: "", value: "جون" },
      { label: "اللقب / اسم العائلة", type: "", value: "29702031400693" },
      { label: "Date of birth", type: "", value: "01 / 04 / 1980" },
      { label: "Gender", type: "", value: "Male" },
      { label: "Nationality", type: "", value: "Egyptian" },
      { label: "Additional Nationality", type: "", value: "-" },
      { label: "Passport No.", type: "", value: "A135464" },
      { label: "Passport Issue Date", type: "", value: "01 / 04 / 1980" },
      { label: "Passport Expiry Date", type: "", value: "01 / 04 / 1980" },
      { label: "", type: "", value: "" },
      { label: "Marital Status", type: "", value: "Single" },
      { label: "Dependencies", type: "", value: "0" },
    ],
    "Contact Information": [
      { label: "Personal Email", type: "", value: "Personal Email" },
      { label: "Mobile", type: "", value: "011223344556" },
    ],
    "Emergenct Contacts": [
      { label: "Emergency Contact Person Name", type: "", value: "Egypt" },
      { label: "Emergency Relation", type: "", value: "Father" },
      { label: "Emergency Phone", type: "", value: "011224477885" },
    ],
    "Address Details": [
      { label: "Country", type: "", value: "John John" },
      { label: "City", type: "", value: "Cairo" },
      { label: "Postal Code", type: "", value: "11728" },
      { label: "", type: "", value: "" },
      { label: "Building", type: "", value: "7" },
      { label: "Street", type: "", value: "Street 127" },
      { label: "Floor No.", type: "", value: "7" },
      { label: "Apartment", type: "", value: "72" },
    ],
    "Driving License Details": [
      { label: "Driving License", type: "", value: "Yes" },
      { label: "Driving License Type", type: "", value: "C1E" },
      {
        label: "Driving License expiry date",
        type: "",
        value: "01 / 04 / 2025",
      },
    ],
    "Military Status": [
      { label: "Require Travel Permit", type: "", value: "Yes" },
      { label: "Military Status", type: "", value: "Exempted" },
      { label: "Document", value: "filename1.docx", type: "file" },
    ],
  };
  return (
    <>
      {Object.entries(userInfo).map(([title, infoData]) => (
        <InfoCard
          title={title}
          action={() => {}}
          key={title}
          sx={{ mb: "24px", p: "40px", borderRadius: "20px" }}
        >
          <Box className="grid gap-6 grid-cols-4">
            {infoData.map(({ label, value, type }) => (
              <Box key={label}>
                <Typography variant="body2">{label}</Typography>
                {type === "file" ? (
                  <Button
                    startIcon={<FileIcon />}
                    sx={{
                      maxWidth: "100%",
                      textTransform: "initial",
                      backgroundColor: "#ECECEC",
                    }}
                  >
                    <Typography variant="body1">{value}</Typography>
                  </Button>
                ) : (
                  <Typography variant="body1">{value}</Typography>
                )}
              </Box>
            ))}
          </Box>
        </InfoCard>
      ))}
    </>
  );
}
