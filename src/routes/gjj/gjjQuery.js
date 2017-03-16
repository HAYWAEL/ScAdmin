import React from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { GjjQuery } from '../../components/gjj'

function mapStateToProps(state) {
    return { cityList: state.cityList }
}
const GjjQueryPage = () =>
    <div className='content-inner'>
        <GjjQuery />
    </div>
/*function GjjQuery({ gjj }) {
    const { cityList, hasChoose } = gjj;
    return (
        <div className='content-inner'>
            <GjjQuery />
        </div>
    )
}*/
export default connect(mapStateToProps)(GjjQueryPage);
