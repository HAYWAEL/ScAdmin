import { request } from '../utils'



export async function getCityInfo (params) {
  return request('/api/gjjCityInfo', {
    method: 'post',
    data: params
  })
}
export async function getCityList (params) {
  return request('/api/gjjCityList', {
    method: 'get',
    data: params
  })
}
