export interface IFormInputs {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
  };
  nationalId: {
    idNumber: string;
    expiryDate: string;
  };
  nationalities: number[];
  maritalStatus: number;
  dependants: number;
  additionalNationalities?: string;
}
