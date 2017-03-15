import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Tabs } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class GjjSearch extends React.Component {

  state = {

  }
  render() {
    function callback(key) {
      console.log(key);
    }
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="登陸方式1" key="1"><Input /></TabPane>
        <TabPane tab="登陸方式 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="登陸方式 3" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    );
  }
}
export default GjjSearch