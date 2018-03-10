import { query } from '../../../services/api';

export default {
  namespace: 'products',
  state: {
    data:[],
    loading:false
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(query, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    }
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
        loading: false ,
      };
    },
    addLoading(state,){
      return {
        ...state,
       loading: true ,
      };
    }
  },
};
