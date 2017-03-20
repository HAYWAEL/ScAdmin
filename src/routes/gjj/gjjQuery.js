import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Tabs, Row, Col } from 'antd';
import GjjChooseCity from '../../components/gjj/gjjChooseCity'
import GjjSearch from '../../components/gjj/gjjSearch'
import GjjResult from '../../components/gjj/gjjResult'

let mapStateToProps = ({ gjj, loading }) => ({ gjj, loading: loading.models.user })
function GjjQuery({ location, dispatch, gjj, loading }) {
    const { cityList, hasChoose, cityInfo ,result} = gjj;

    const { field, keyword } = location.query;
    const cityListProps = {
        dataSource: cityList,
        onSearch(id) {
            dispatch({
                type: "gjj/getCityInfo",
                payload: { id: id }
            })
        }
    }
    const gjjSearchProps = {
        dataSource: cityInfo,
        onSearch(form) {
            dispatch({
                type: "gjj/getGjjResult",
                payload: { id: form }
            })
        }
    }
    const gjjResultProps = {
        dataSource: result,
        onResultChange(result){
            dispatch({
                type:"gjj/resultChange",
                result:result
            })
        }
    }

    return (
        <div className='content-inner'>
            <Row gutter={24}>
                <Col lg={8} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
                    <GjjChooseCity {...cityListProps} />
                    <GjjSearch  {...gjjSearchProps} />
                </Col>
                <Col lg={16} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
                 <GjjResult  {...gjjResultProps} />
                </Col>
               
            </Row>



        </div>
    )
}
export default connect(mapStateToProps)(GjjQuery);
