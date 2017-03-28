import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Tabs, Row, Col } from 'antd';
import Citylist from "../../components/mobile/list"
let mapStateToProps = ({ mobile, loading }) => ({ mobile, loading: loading.models.user })
function MobileSetting({ location, dispatch, mobile, loading }) {
    const { cityList, pagination} = mobile;
    const { field, keyword } = location.query;
    console.log(mobile)
    const cityListProps = {
    dataSource: cityList,
    loading,
    pagination: pagination,
    location,
    }
    return (
        <div> hello
            <Citylist {...cityListProps} />
        </div>
    )
}
export default connect(mapStateToProps)(MobileSetting)