import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Tabs, Row, Col } from 'antd';
import styles from './gjjSearch.less'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function gjjSearch({ loading, location, dataSource, onSearch }) {
const handleOnClick=function(e){
  onSearch({"phone":"15655207798"})
}
  let tabPane = [];
  if (dataSource.queryStepParam) {

    for (let i = 0; i < dataSource.queryStepParam.length; i++) {
      let inputList = []
      for (let j = 0; j < dataSource.queryStepParam[i].loginParam.length; j++) {
        
        if (dataSource.queryStepParam[i].loginParam[j].name == 'code') {
          inputList.push(
            <Row type="flex" align="middle">
              <Col xs={{ span: 9, offset: 1 }} lg={{ span:18, offset: 0 }}>
                <Input
                  size="large"
                  className="ant-input"
                  style={{ marginBottom: 8 }}
                  placeholder={dataSource.queryStepParam[i].loginParam[j].name}
                  key={dataSource.queryStepParam[i].loginParam[j].name}
                />
              </Col>
               <Col xs={{ span: 2, offset: 0}} lg={{ span: 2, offset: 0 }}>
                <img 
                src="http://www.hzgjj.gov.cn:8080/WebAccounts/codeMaker"
                />
              </Col>
            </Row>
          )

        } else {
          inputList.push(
            <Row type="flex" align="middle">
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 20, offset: 0 }}>
                <Input
                  size="large"
                  className="ant-input"
                  style={{ marginBottom: 8 }}
                  placeholder={dataSource.queryStepParam[i].loginParam[j].name}
                  key={dataSource.queryStepParam[i].loginParam[j].name}
                />
              </Col>
            </Row>
          )
        }

      }
      inputList.push(
        <Row>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 18, offset: 1}}>
            <Button
              key={'button'+i}
              style={{ marginTop: 16 }}
              onClick={handleOnClick}
              type="primary">查询</Button >
              </Col>
        </Row>
      )
      tabPane.push(<TabPane tab={"第"+i+"种查询方式"} key={"pane"+i} >{inputList}</TabPane>)
    }
  }

  return (

    <Tabs defaultActiveKey="1" onChange={console.log()}  type="card">
      {tabPane}
    </Tabs>

  );
}

export default gjjSearch