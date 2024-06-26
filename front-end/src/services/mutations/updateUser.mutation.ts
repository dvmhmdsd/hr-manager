// src/graphql/mutations.ts
import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;
