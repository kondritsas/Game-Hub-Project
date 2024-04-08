import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:"581a97cf08af4414a5902eb281944096"
    }

})