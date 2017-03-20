import React, {PropTypes} from 'react'
import classnames from 'classnames'
// import ReactDOM from 'react-dom'
import { Select, Button, Tabs, Row, Col } from 'antd';
import GjjSearch from './gjjSearch.js'
import styles from './gjjChooseCity.less'

const Option = Select.Option;

function gjjChooseCity({loading, location, dataSource,onSearch}) {
    let selectValue
    const handleChange = (value, e) => {
        selectValue=value
    }
    const handleClick = (value, e) => {
        onSearch(selectValue)
    }
    let cityList=dataSource.map((city)=><Option value={city.value} key={city.name}>{city.name}</Option>)
    const filterOption=(input, option) => {
       return  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    return (
        <Row gutter={24} className={styles.search}>
            <Col lg={12} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select a city"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onBlur={handleChange}
                    filterOption={filterOption}
                >
                   {cityList}

                </Select>
            </Col>
            <Col lg={5} md={12} sm={24} xs={24} style={{ marginBottom: 0 }}>
                <Button type="primary" icon="search" onClick={handleClick}>获取城市配置</Button>
            </Col>
        </Row>
    )
}
export default gjjChooseCity