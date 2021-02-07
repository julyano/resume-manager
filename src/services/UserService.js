import http from "../common/http/http-common";
const endpoint = '/users';

class UserService {

  async getUsers() {
    try {
      await http.get(endpoint)
    } catch (error) {
      console.log('erro');
    } finally {
      console.log('fim');
    }
  }

  getOneUser(id) {
    return http.get(`${endpoint}/${id}`).then(res => console.log(res))
    .catch(error => console.log(error))
  }

  createUser(user) {
    return http.post(`${endpoint}`, user).then(res => console.log(res))
    .catch(error => console.log(error))
  }

  updateUser(id, user) {
    return http.put(`${endpoint}/${id}`, user).then(res => console.log(res))
    .catch(error => console.log(error))
  }

  deleteUser(id) {
    return http.delete(`${endpoint}/${id}`).then(res => console.log(res))
    .catch(error => console.log(error))
  }
}

export default new UserService();