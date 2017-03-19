import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Tabs } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function gjjSearch({ loading, location, dataSource, onSearch }) {

  let tabPane = [];
  if (dataSource.queryStepParam) {

    for (let i = 0; i < dataSource.queryStepParam.length; i++) {
      let inputList = []
      console.log(dataSource.queryStepParam[i].loginParam.length)
      for (let j = 0; j < dataSource.queryStepParam[i].loginParam.length; j++) {
        inputList.push(<Input size="large" placeholder={dataSource.queryStepParam[i].loginParam[j].name} key ={dataSource.queryStepParam[i].loginParam[j].name}/>)
      }
      inputList.push(<Button key={i}>查询</Button>)
      console.log(inputList)
      tabPane.push(<TabPane tab="查询方式" key={i} >{inputList}</TabPane>)
    }
  }

  return (
    <Tabs defaultActiveKey="1" onChange={console.log()}>
      {tabPane}
    </Tabs>
  );
}

export default gjjSearch