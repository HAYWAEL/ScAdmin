import {getCityList,getCityInfo} from '../services/gjj'
import { parse } from 'qs'
export default {
  namespace: 'gjj',
  state: {
    cityList: [],
    cityInfo: {},
    hasChoose: false,
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/Gjj/gjjQuery") {
          dispatch({
            type: 'getCityList',
            payload:""
          })
        }
      })
    }
  },
   effects: {
    *getCityList ({ payload }, { call, put }) {
      const data = yield call(getCityList, parse(payload))
      if (data) {
        yield put({
          type: 'queryCityListSuccess',
          payload: {
            cityList: data.cityList,
          }
        })
      }else{
        console.log("err")
      }
    },
    *getCityInfo ({ payload }, { call, put }) {
      const data = yield call(getCityInfo, payload)
      if (data) {
        yield put({
          type: 'queryCityInfoSuccess',
          payload: {
            cityInfo: data
          }
        })
      }
    },
   },
   reducers: {
    queryCityListSuccess (state, action) {
      const {cityList} = action.payload
      return { ...state, cityList}
    },
    queryCityInfoSuccess (state, action) {
      const {cityInfo} = action.payload
      return { ...state, cityInfo}
    },
  }

}