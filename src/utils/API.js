import axios from "axios";

function getUsers() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
};

export default getUsers;