import { User } from '../interfaces/User';

const usersApi = () => {
  const fetchUsers = (): Promise<User[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users/').then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<User[]>;
    });
  };

  return {
    fetchUsers,
  };
};

export default usersApi;
