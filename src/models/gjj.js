import query from '../services/users'
import { parse } from 'qs'
export default {

  namespace: 'gjj',

  state: {
    cityList: [],
    cityInfo: {},
    hasChoose: false,
  },

}