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
export async function getGjjResult (params) {
  console.log(params)
  return request('/api/getGjjResult', {
    method: 'post',
    data: params
  })
}