import faker from 'faker';

// NOTE: čia actually turėtų būt call'as į back'ą
export function getUsers({ sortBy, sortOrder } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [];

      for (let i = 0; i < 5; i += 1) {
        users.push({
          id: Math.random(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          age: Math.floor(Math.random() * (90 - 18) + 18).toString(),
        });

        if (sortBy && sortOrder) {
          users.sort((userA, userB) => {
            if (sortOrder === 'ASC') {
              return userA[sortBy].localeCompare(userB[sortBy]);
            }

            return userB[sortBy].localeCompare(userA[sortBy]);
          });
        }

        resolve(users);
      }
    }, 1000);
  });
}
