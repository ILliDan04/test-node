const BASE_URL = "/";

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${BASE_URL}auth/login/`,
    REGISTER: `${BASE_URL}auth/register/`,
  },
  USERS: {
    CREATE: `${BASE_URL}users/create/`,
    DELETE: `${BASE_URL}users/delete/:id/`,
    USER_BY_ID: `${BASE_URL}users/:id/`,
    ALL_USERS: `${BASE_URL}users/`,
    UPDATE_USER: `${BASE_URL}users/:id/`,
  },
};
