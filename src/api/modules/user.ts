import axios from '@/plugins/axios'

function loginUser(data?: any) {
  return axios.post(`v1/user/login`, data)
}
function getCurrentUser() {
  return axios.get(`v1/users/me`)
}
function updateCurrentUserPassword(password: string) {
  return axios.put(`/v1/users/me/password`, { password })
}

export {
  getCurrentUser,
  loginUser,
  updateCurrentUserPassword,
}
