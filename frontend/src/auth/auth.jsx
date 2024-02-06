import axios from "axios";
import store from "../store";
let token = store.getState().user.token; 
store.subscribe(()=>{
    token = store.getState().user.token; 
})
const API = axios.create({
    baseURL : "http://localhost:8000"
})
API.interceptors.request.use((config)=>{
    if (token){
        config.headers.Authorization = `token ${token}`
    }
    return config;
});
export default API ;