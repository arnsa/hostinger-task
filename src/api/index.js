import faker from 'faker';

const USERS_LIMIT = 5000;

// NOTE: čia actually turėtų būt call'as į back'ą
export function getUsers({
  // page = 1, - šito reiktų, jei tikras back'as būtų
  limit = USERS_LIMIT,
  sortBy,
  sortOrder,
} = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [];

      for (let i = 0; i < (limit === -1 ? USERS_LIMIT : limit); i += 1) {
        users.push({
          id: Math.random(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          age: Math.floor(Math.random() * (90 - 18) + 18).toString(),
        });
      }

      if (sortBy && sortOrder) {
        users.sort((userA, userB) => {
          if (sortOrder === 'ASC') {
            return userA[sortBy].localeCompare(userB[sortBy]);
          }

          return userB[sortBy].localeCompare(userA[sortBy]);
        });
      }

      resolve({
        users,
        count: USERS_LIMIT,
      });
    }, 1000);
  });
}
