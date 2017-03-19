import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import GjjChooseCity from '../../components/gjj/gjjChooseCity'
import GjjSearch from '../../components/gjj/gjjSearch'

let mapStateToProps = ({ gjj, loading }) => ({ gjj, loading: loading.models.user })
function GjjQuery({ location, dispatch, gjj, loading }) {
    const { cityList, hasChoose,cityInfo } = gjj;
  
    const { field, keyword } = location.query;
    const cityListProps = {
        dataSource: cityList,
        onSearch(id) {
            dispatch({
                type:"gjj/getCityInfo",
                payload:{id:id}
            })
            }
    }
    const gjjSearchProps = {
        dataSource: cityInfo,
        onSearch(id) {
            dispatch({
                type:"gjj/getCityInfo",
                payload:{id:id}
            })
            }
    }

    return (
        <div className='content-inner'>
            <GjjChooseCity {...cityListProps} />
            <GjjSearch  {...gjjSearchProps} />
        </div>
    )
}
export default connect(mapStateToProps)(GjjQuery);
