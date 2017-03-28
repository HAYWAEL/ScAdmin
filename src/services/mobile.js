import { request } from '../utils'

export async function getThxdCity (params) {
  return request('/api/getThxdCity', {
    method: 'get',
    data: params
  })
}
