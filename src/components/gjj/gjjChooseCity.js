import React from 'react'
import ReactDOM from 'react-dom'
import { Select, Button, Tabs, Row, Col } from 'antd';
import GjjSearch from './gjjSearch.js'

const Option = Select.Option;



class GjjChooseCity extends React.Component {
    state = {
        data: []
    }
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        };

        return (
            <Row gutter={24}>
                <Col lg={6} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
                    <Select
                        showSearch
                        style={{ width: 350 }}
                        placeholder="Select a city"
                        optionFilterProp="children"
                        onChange={handleChange}
                        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="3">州 </Option>
                        <Option value="19">湖州</Option>
                        <Option value="127">金华</Option>
                        <Option value="202">丽水</Option>
                        <Option value="224">舟山</Option>
                        <Option value="226">义乌</Option>
                        <Option value="255">浦江</Option>
                        <Option value="289">温岭</Option>
                        <Option value="290">磐安</Option>
                        <Option value="293">开化县</Option>
                        <Option value="298">衢州</Option>
                        <Option value="303">台州市</Option>
                        <Option value="310">青田</Option>
                        <Option value="316">婺城区</Option>
                        <Option value="327">椒江</Option>
                        <Option value="335">天台</Option>
                        <Option value="337"></Option>
                        <Option value="340">兰溪</Option>
                        <Option value="348">东阳</Option>
                        <Option value="355">绍兴</Option>
                        <Option value="361">宁波</Option>
                        <Option value="371">温州</Option>


                    </Select>
                    </Col>
                    <Col lg={5} md={24} sm={24} xs={24} style={{ marginBottom: 0 }}>
                        <Button type="primary" icon="search" onClick={() => { dispatch({type: 'count/add'}); }}>获取城市配置</Button>
                    </Col>  
            </Row>
        )
    }
}

export default GjjChooseCity