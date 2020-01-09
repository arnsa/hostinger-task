import * as api from '../api';
import { loadUsers } from './App.utils';

describe('loadUsers()', () => {
  it('should set correct state after getting users', async (done) => {
    const setUsersRequestMock = jest.fn();

    await loadUsers({
      page: 1,
      limit: 25,
      sortBy: 'firstName',
      sortOrder: 'ASC',
      setUsersRequest: setUsersRequestMock,
    });

    expect(setUsersRequestMock).toHaveBeenNthCalledWith(2, {
      error: null,
      isLoading: false,
      items: expect.any(Array),
      totalItems: 5000,
    });

    done();
  });

  it('should set correct state after error while loading users', async (done) => {
    const setUsersRequestMock = jest.fn();
    const getUsersOrig = api.loadUsers;

    api.getUsers = jest.fn().mockImplementation(() => Promise.reject('error'));

    await loadUsers({
      page: 1,
      limit: 25,
      sortBy: 'firstName',
      sortOrder: 'ASC',
      setUsersRequest: setUsersRequestMock,
    });

    expect(setUsersRequestMock).toHaveBeenNthCalledWith(2, {
      error: 'error',
      isLoading: false,
      items: [],
      totalItems: 0,
    });

    api.getUsers = getUsersOrig;
    done();
  });
});
