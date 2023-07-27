import axios from "axios"

const addUser = (newUser) => {
    return axios.post(`http://localhost:3001/users`, newUser)
}

const authUser = (user) => {
    return axios.post(`http://localhost:3001/signin`, user)
}

export default { addUser, authUser }