import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  baseURL: baseUrl
})
export function login (params = {}) {
  return instance.post('/duty/login', qs.stringify(params))
}

export function getList (params = {}) {
  return instance.post('/emergencyPlan/list', qs.stringify(params))
}
