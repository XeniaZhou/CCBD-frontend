import axios from 'axios'
import {ElMessage} from 'element-plus';

import router from "./router";

axios.defaults.baseURL = "http://localhost:8081"

//前置拦截
axios.interceptors.request.use(config => {
    return config
})

// axios.interceptors.response.use( response =>{
//         let res = response.data
//
//         if (res.success){
//             return response
//         } else{
//             ElMessage({
//                 message: response,
//                 type: 'error',
//                 duration: 3 * 1000
//             })
//
//             return Promise.reject(response.data.msg)
//         }
//     },error => {
//         console.log('err' + error)// for debug
//         if(error.response.data.success) {
//             error.message = error.response.data.msg
//         }
//         // 根据请求状态觉得是否登录或者提示其他
//         if (error.response.data.code === 401) {
//             let store;
//             router.push({
//                 path: '/login'
//             });
//             error.message = '请重新登录';
//         }
//         if (error.response.data.code === 403) {
//             error.message = '权限不足，无法访问';
//         }
//         ElMessage({
//             message: error.message,
//             type: 'error',
//             duration: 3 * 1000
//         })
//         return Promise.reject(error)
//     }
// )