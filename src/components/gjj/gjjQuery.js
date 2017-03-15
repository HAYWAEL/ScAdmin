import React from 'react'
import ReactDOM from 'react-dom'
import { Select, Button, Tabs,Row,Col } from 'antd';
import GjjSearch from './gjjSearch.js'
import GjjChooseCity from './gjjChooseCity.js'

const Option = Select.Option;



class GjjQuery extends React.Component {
  state = {
    hasChoose:false,
    data: []
  }
  render() {
    function handleChange(value) {
      console.log(`selected ${value}`);
    };

    return (
      <div>
        <GjjChooseCity />
        <GjjSearch />
      </div>
    )
  }
}

export default GjjQuery