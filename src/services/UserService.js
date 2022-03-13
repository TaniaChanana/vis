import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/user/getAllUser';

export default function getUsers(){

        return axios.get(USERS_REST_API_URL)
    
}

// export default new UserService();

// import axios from "axios";
// const POST_API_BASE_URL = "http://localhost:8080/api/posts";

// export default function getPosts() {
//   return axios.get(POST_API_BASE_URL);
// }