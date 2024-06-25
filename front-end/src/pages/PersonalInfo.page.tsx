import { Box, Typography } from "@mui/material";
import InfoCard from "../shared/InfoCard";

export default function PersonalInfo() {
  const userInfo = {
    "Basic Information": [
      { label: "National ID Number", value: "29702031400693" },
      { label: "National ID Expiring Date", value: "01/ 04 / 2025" },
      { label: "Title", value: "Mr." },
      { label: "", value: "" },
      { label: "First Name", value: "John" },
      { label: "Father Name", value: "John" },
      { label: "Grand Father Name", value: "John" },
      { label: "Family Name", value: "Smith" },
      { label: "الإسم الأول", value: "جون" },
      { label: "اسم الأب", value: "جون" },
      { label: "اسم الجد", value: "جون" },
      { label: "اللقب / اسم العائلة", value: "29702031400693" },
      { label: "Date of birth", value: "01 / 04 / 1980" },
      { label: "Gender", value: "Male" },
      { label: "Nationality", value: "Egyptian" },
      { label: "Additional Nationality", value: "-" },
      { label: "Passport No.", value: "A135464" },
      { label: "Passport Issue Date", value: "01 / 04 / 1980" },
      { label: "Passport Expiry Date", value: "01 / 04 / 1980" },
      { label: "", value: "" },
      { label: "Marital Status", value: "Single" },
      { label: "Dependencies", value: "0" },
    ],
    "Contact Information": [
      { label: "Personal Email", value: "Personal Email" },
      { label: "Mobile", value: "011223344556" },
    ],
    "Emergenct Contacts": [
      { label: "Emergency Contact Person Name", value: "Egypt" },
      { label: "Emergency Relation", value: "Father" },
      { label: "Emergency Phone", value: "011224477885" },
    ],
    "Address Details": [
      { label: "Country", value: "John John" },
      { label: "City", value: "Cairo" },
      { label: "Postal Code", value: "11728" },
      { label: "", value: "" },
      { label: "Building", value: "7" },
      { label: "Street", value: "Street 127" },
      { label: "Floor No.", value: "7" },
      { label: "Apartment", value: "72" },
    ],
    "Driving License Details": [
      { label: "Driving License", value: "Yes" },
      { label: "Driving License Type", value: "C1E" },
      { label: "Driving License expiry date", value: "01 / 04 / 2025" },
    ],
    "Military Status": [
      { label: "Require Travel Permit", value: "Yes" },
      { label: "Military Status", value: "Exempted" },
      { label: "Document", value: "filename1.docx", type: "file" },
    ],
  };
  return (
    <>
      {Object.entries(userInfo).map(([title, infoData]) => (
        <InfoCard title={title} action={() => {}} key={title} sx={{mb: '24px'}}>
          <Box className="grid gap-6 grid-cols-4">
            {infoData.map(({ label, value }) => (
              <Box key={label} >
                <Typography variant="body2">{label}</Typography>
                <Typography variant="body1">{value}</Typography>
              </Box>
            ))}
          </Box>
        </InfoCard>
      ))}
    </>
  );
}
