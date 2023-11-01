export const API_URL="http://localhost:1337/api"
/*export const GET_USER_URL=`http://localhost:1337/api/users?filters[email][$eq]=${em}`*/
export const LOGIN_URL= API_URL+"/auth/local"
export const USER_PERMISSIONS=API_URL+"/users-permissions/roles"
export const REGISTER_URL=LOGIN_URL+"/register"