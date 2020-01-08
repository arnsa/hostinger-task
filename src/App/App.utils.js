import { getUsers } from '../api';

export async function loadUsers({ sortBy, sortOrder, setUsersRequest }) {
  setUsersRequest((usersRequest) => ({
    ...usersRequest,
    isLoading: true,
  }));

  try {
    const users = await getUsers({ sortBy, sortOrder });

    setUsersRequest({
      items: users,
      error: null,
      isLoading: false,
    });
  } catch (error) {
    setUsersRequest({
      error,
      items: [],
      isLoading: false,
    });
  }
}
