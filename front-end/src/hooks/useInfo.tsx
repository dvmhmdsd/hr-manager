export function useInfo() {
  const userInfo = {
    "Basic Information": [
      {
        label: "National ID Number",
        type: "",
        value: "29702031400693",
        name: "nationalId.idNumber",
      },
      {
        label: "National ID Expiring Date",
        type: "",
        value: "01/ 04 / 2025",
        name: "nationalId.expiryDate",
      },
      { label: "Title", type: "", value: "Mr.", name: null },
      { label: "", type: "", value: "", name: null },
      { label: "First Name", type: "", value: "John", name: "firstName" },
      { label: "Father Name", type: "", value: "John", name: "fatherName" },
      {
        label: "Grand Father Name",
        type: "",
        value: "John",
        name: "grandfatherName",
      },
      { label: "Family Name", type: "", value: "Smith", name: "familyName" },
      {
        label: "الإسم الأول",
        type: "",
        value: "جون",
        name: "localizedName.firstName",
      },
      {
        label: "اسم الأب",
        type: "",
        value: "جون",
        name: "localizedName.fatherName",
      },
      {
        label: "اسم الجد",
        type: "",
        value: "جون",
        name: "localizedName.grandfatherName",
      },
      {
        label: "اللقب / اسم العائلة",
        type: "",
        value: "سميث",
        name: "localizedName.familyName",
      },
      { label: "Date of birth", type: "", value: "01 / 04 / 1980", name: null },
      { label: "Gender", type: "", value: "Male", name: null },
      {
        label: "Nationality",
        type: "",
        value: "Egyptian",
        name: "nationalities",
      },
      { label: "Additional Nationality", type: "", value: "-", name: null },
      { label: "Passport No.", type: "", value: "A135464", name: null },
      {
        label: "Passport Issue Date",
        type: "",
        value: "01 / 04 / 1980",
        name: null,
      },
      {
        label: "Passport Expiry Date",
        type: "",
        value: "01 / 04 / 1980",
        name: null,
      },
      { label: "", type: "", value: "", name: null, },
      {
        label: "Marital Status",
        type: "",
        value: "Single",
        name: "maritalStatus",
      },
      { label: "Dependencies", type: "", value: "0", name: "dependants" },
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

  const bankInfo = [
    { label: "Bank Name", value: "CIB" },
    { label: "IBAN", value: "12346546413216446" },
  ];

  return { userInfo, bankInfo };
}
