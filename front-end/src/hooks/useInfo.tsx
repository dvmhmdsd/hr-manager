import { useApi } from "./useApi";

export function useInfo() {
  const { data, loading, error } = useApi();
  const userInfo = {
    "Basic Information": [
      {
        key: 1,
        label: "National ID Number",
        type: "",
        value: data?.user.nationalId.idNumber,
        name: "nationalId.idNumber",
      },
      {
        key: 2,
        label: "National ID Expiring Date",
        type: "",
        value:
          data &&
          new Date(data?.user.nationalId.expiryDate).toLocaleDateString(),
        name: "nationalId.expiryDate",
      },
      { key: 3, label: "Title", type: "", value: "Mr.", name: null },
      { key: 4, label: "", type: "", value: "", name: null },
      {
        key: 5,
        label: "First Name",
        type: "",
        value: data?.user.firstName,
        name: "firstName",
      },
      {
        key: 6,
        label: "Father Name",
        type: "",
        value: data?.user.fatherName,
        name: "fatherName",
      },
      {
        key: 7,
        label: "Grand Father Name",
        type: "",
        value: data?.user.grandfatherName,
        name: "grandfatherName",
      },
      {
        key: 8,
        label: "Family Name",
        type: "",
        value: data?.user.familyName,
        name: "familyName",
      },
      {
        key: 9,
        label: "الإسم الأول",
        type: "",
        value: data?.user.localizedName.firstName,
        name: "localizedName.firstName",
      },
      {
        key: 10,
        label: "اسم الأب",
        type: "",
        value: data?.user.localizedName.fatherName,
        name: "localizedName.fatherName",
      },
      {
        key: 11,
        label: "اسم الجد",
        type: "",
        value: data?.user.localizedName.grandfatherName,
        name: "localizedName.grandfatherName",
      },
      {
        key: 12,
        label: "اللقب / اسم العائلة",
        type: "",
        value: data?.user.localizedName.familyName,
        name: "localizedName.familyName",
      },
      {
        key: 13,
        label: "Date of birth",
        type: "",
        value: "01 / 04 / 1980",
        name: null,
      },
      { key: 14, label: "Gender", type: "", value: "Male", name: null },
      {
        key: 15,
        label: "Nationality",
        type: "",
        value: getMainNationality(data?.user.nationalities),
        name: "nationalities",
      },
      {
        key: 16,
        label: "Additional Nationality",
        type: "",
        value: getAdditionalNationalities(data?.user.nationalities),
        name: "additionalNationalities",
      },
      {
        key: 17,
        label: "Passport No.",
        type: "",
        value: "A135464",
        name: null,
      },
      {
        key: 18,
        label: "Passport Issue Date",
        type: "",
        value: "01 / 04 / 1980",
        name: null,
      },
      {
        key: 19,
        label: "Passport Expiry Date",
        type: "",
        value: "01 / 04 / 1980",
        name: null,
      },
      { key: 20, label: "", type: "", value: "", name: null },
      {
        key: 21,
        label: "Marital Status",
        type: "",
        value: data?.user?.maritalStatus.name,
        name: "maritalStatus",
      },
      {
        key: 22,
        label: "Dependencies",
        type: "",
        value: data?.user.dependants,
        name: "dependants",
      },
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

  return { userInfo, bankInfo, loading, error };
}

function getMainNationality(
  nationalities: { country: { id: number; name: string } }[]
) {
  return nationalities?.[0].country.name;
}

function getAdditionalNationalities(
  nationalities: { country: { id: number; name: string } }[]
) {
  return nationalities
    ?.slice(1)
    .map((n) => n.country.name)
    .join(", ");
}
