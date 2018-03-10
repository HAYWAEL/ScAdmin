import request from '../utils/request';
import { stringify } from 'qs';
export async function query(params) {
  return request(`/api/sort?${stringify(params)}`);
}