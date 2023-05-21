import axios from 'axios';

const USER_MANAGEMENT_API_BASE_URL = "http://localhost:8080/api/v1/User";
const API_BASE_URL = "http://localhost:8080/api/v1";

class UserManagementService {

    // Get all users
    getAllUsers() {
        return axios.get(USER_MANAGEMENT_API_BASE_URL);
    }

    // Get user by id
    getUserById(id) {
        return axios.get(USER_MANAGEMENT_API_BASE_URL + "/" + id);
    }

    // Create new user
    createUser(user) {
        return axios.post(USER_MANAGEMENT_API_BASE_URL, user);
    }

    // Update user
    updateUser(user, id) {
        return axios.put(USER_MANAGEMENT_API_BASE_URL + "/" + id, user);
    }

    // Delete user
    deleteUser(id) {
        return axios.delete(USER_MANAGEMENT_API_BASE_URL + "/" + id);
    }

    // //ForLogin
    // getUser(id){
    //     return axios.get(USER_MANAGEMENT_API_BASE_URL+"/login/"+id);
    // }

    // Login user
  loginUser(userName, password) {
    const url = `${API_BASE_URL}/login?userName=${userName}&password=${password}`;
    return axios.get(url);
  }


}

export default new UserManagementService()