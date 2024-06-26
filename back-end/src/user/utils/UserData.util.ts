import { NotFoundException } from '@nestjs/common';
import { MaritalStatus, Nationality, User } from 'src/graphql';

export class UserUtils {
  users: User[] = [
    {
      id: 1234,
      firstName: 'Zaria',
      fatherName: 'Edward',
      grandfatherName: 'Ernest',
      familyName: 'Willie',
      localizedName: {
        firstName: 'صفوان',
        fatherName: 'حمدان',
        grandfatherName: 'هشام',
        familyName: 'عباس',
      },
      nationalId: {
        idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
        expiryDate: '2024-07-24T22:45:29.864Z',
      },
      nationalities: [
        { country: { id: 1016, name: 'Bolivia' }, countryId: 1016 },
        { country: { id: 1117, name: 'Latvia' }, countryId: 1117 },
        {
          country: { id: 1225, name: 'Virgin Islands, U.S.' },
          countryId: 1225,
        },
      ],
      maritalStatus: { id: 27, name: 'Divorced' },
      dependants: 60,
    },
  ];

  getCountryByName(countryName: string): Nationality {
    const randomId = Math.floor(Math.random() * 100);
    return {
      country: {
        id: randomId,
        name: countryName,
      },
      countryId: randomId,
    };
  }

  getMaritalStatus(maritalStatus: string): MaritalStatus {
    const randomId = Math.floor(Math.random() * 100);
    return {
      id: randomId,
      name: maritalStatus,
    };
  }

  searchForUser(id: number): [User, number] {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1)
      throw new NotFoundException(
        'The user with this national ID is not found !',
      );

    return [this.users[userIndex], userIndex];
  }
}
