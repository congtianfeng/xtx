import axios from 'axios'
import store from '@/store'
import router from '@/router'
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000
})
//  请求拦截器,统一注入token
request.interceptors.request.use(config => {
  const { token } = store.state.user.profile
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, err => Promise.reject(err))
//  响应拦截器，剥离数据、被动处理token过期
request.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.sattus === 401) {
    store.commit('use/setUser', {})
    router.push('/login')
  }
  return Promise.reject(err)
})
export default request
