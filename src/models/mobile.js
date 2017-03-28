import { getThxdCity } from '../services/mobile'
import { parse } from 'qs'
export default {
    namespace: 'mobile',
    state: {
        cityList: [],
        pagination: {
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: total => `共 ${total} 条`,
            current: 1,
            total: null
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === "/mobile/mobileSetting") {
                    dispatch({
                        type: 'getThxdCity',
                        payload: ""
                    })
                }
            })
        }
    },
    effects: {
        *getThxdCity({ payload }, { call, put }) {
            const data = yield call(getThxdCity, parse(payload))
            if (data) {
                yield put({
                    type: 'getThxdCitySuccess',
                    payload: {
                        cityList: data.data,
                        pagination: data.page
                    }
                })
            } else {
                console.log("err")
            }
        },
    },
    reducers: {
        getThxdCitySuccess(state, action) {
            const { cityList } = action.payload
            return { ...state, cityList }
        },
    }
}