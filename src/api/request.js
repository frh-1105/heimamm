import axios from "axios"

const request = axios.create({
    // ajax跨域请求不会携带cookie，需要人为设置
    withCredentials:true,
    // 基地址
    baseURL:process.env.VUE_APP_BASE_URL
})

export default request