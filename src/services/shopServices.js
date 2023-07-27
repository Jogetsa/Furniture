import axios from "axios";

const getData = () => {
    return axios.get(`http://localhost:3001/shop`)
}

export default { getData }