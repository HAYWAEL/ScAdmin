import { request } from '../utils'



export async function query (params) {
  return request('/api/GjjCityInfo', {
    method: 'post',
    data: params
  })
}
