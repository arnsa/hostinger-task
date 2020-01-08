import { getUsers } from '../api';

export async function loadUsers({
  page,
  limit,
  sortBy,
  sortOrder,
  setUsersRequest,
}) {
  setUsersRequest((usersRequest) => ({
    ...usersRequest,
    isLoading: true,
  }));

  try {
    const data = await getUsers({
      page,
      limit,
      sortBy,
      sortOrder,
    });

    setUsersRequest({
      error: null,
      isLoading: false,
      items: data.users,
      totalItems: data.count,
    });
  } catch (error) {
    setUsersRequest({
      error,
      items: [],
      totalItems: 0,
      isLoading: false,
    });
  }
}
