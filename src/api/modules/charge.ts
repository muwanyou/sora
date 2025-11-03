import axios from '@/plugins/axios'

function listCharges(parameters?: any) {
  return axios.get(`v1/charges`, {
    params: parameters,
  })
}

export {
  listCharges,
}
