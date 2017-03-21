import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Tabs, Row, Col } from 'antd';
function gjjResult({  loading, location,dataSource,onResultChange }) {
    const onTextChange = function (e) {
        console.log(e.target.value)
       onResultChange(e.target.value)
    }
    return (
        <Row >
            <Col lg={12} md={12} sm={16} xs={24} style={{ marginBottom: 16 }} >
                <Input type="textarea" rows={40} style={{ height: "100%" }} onChange={onTextChange}  value={dataSource}/>
            </Col>
            <Col lg={11} md={11} sm={16} xs={24} style={{ marginLeft: 16,backgroundColor:"#d2eafb" }}  >
                <code style={{ height: "100%" ,wordBreak:"break-all"}} >{dataSource}</code>
            </Col>
        </Row>
    )
}
export default gjjResult