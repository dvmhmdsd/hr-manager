
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LocalizedNameInput {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
}

export class NationalIdInput {
    idNumber: string;
    expiryDate: string;
}

export class UpdateUserInput {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
    localizedName?: Nullable<LocalizedNameInput>;
    nationalId?: Nullable<NationalIdInput>;
    nationalities?: Nullable<number[]>;
    maritalStatus: number;
    dependants: number;
}

export class LocalizedName {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
}

export class NationalId {
    idNumber: string;
    expiryDate: string;
}

export class Country {
    id: number;
    name: string;
}

export class Nationality {
    country: Country;
    countryId: number;
}

export class MaritalStatus {
    id: number;
    name: string;
}

export class User {
    id: number;
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
    localizedName?: Nullable<LocalizedName>;
    nationalId?: Nullable<NationalId>;
    nationalities?: Nullable<Nationality[]>;
    maritalStatus?: Nullable<MaritalStatus>;
    dependants: number;
}

export abstract class IQuery {
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract updateUser(id: number, input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
