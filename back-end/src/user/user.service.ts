import { Injectable } from '@nestjs/common';
import { UpdateUserInput, User } from 'src/graphql';
import { UserUtils } from './utils/UserData.util';

@Injectable()
export class UserService {
  private userUtils: UserUtils;

  constructor() {
    this.userUtils = new UserUtils();
  }

  findUser(id: number) {
    const [user] = this.userUtils.searchForUser(id);

    return { ...user };
  }

  updateUser(id: number, updateUserInput: UpdateUserInput): User {
    const [, userIndex] = this.userUtils.searchForUser(id);

    // To map the NationalityInput & MaritalStatusInput
    // to Nationality and MaritalStatus respectively
    const updatedUser = this.mapInputDataToUserType(userIndex, updateUserInput);

    this.userUtils.users[userIndex] = updatedUser;
    return this.userUtils.users[userIndex];
  }

  private mapInputDataToUserType(
    userIndex: number,
    updateUserInput: UpdateUserInput,
  ) {
    return {
      ...this.userUtils.users[userIndex],
      ...updateUserInput,
      nationalities: updateUserInput.nationalities?.map((nationalityInput) => ({
        country: this.userUtils.getCountryById(nationalityInput.countryId),
        countryId: nationalityInput.countryId,
      })),
      maritalStatus: {
        id: updateUserInput.maritalStatus.id,
        name: this.userUtils.getMaritalStatusById(
          updateUserInput.maritalStatus.id,
        ),
      },
    };
  }
}
