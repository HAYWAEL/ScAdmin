import React, {PropTypes} from 'react'
import {Table, Modal} from 'antd'
import styles from './list.less'
import classnames from 'classnames'
import TableBodyWrapper from '../common/TableBodyWrapper'
import {DropOption} from '../ui/index'

const confirm = Modal.confirm

function list ({ loading, dataSource, pagination,  location }) {
  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '您确定要删除这条记录吗?',
        onOk () {
          onDeleteItem(record.id)
        }
      })
    }
  }
let isMotion=false
  const columns = [
    {
      title: '城市id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '城市名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '脚本名',
      dataIndex: 'jsName',
      key: 'jsName'
    }, {
      title: '省份ID',
      dataIndex: 'provinceId',
      key: 'provinceId',
      
    }, {
      title: '运营商类型',
      dataIndex: 'operatorType',
      key: 'operatorType',
      render: (text) => <span>{text==1
            ? '移动'
            : '联通'}</span>
    }, {
      title: '城市状态',
      dataIndex: 'state',
      key: 'state'
    }, {
      title: '查询参数',
      dataIndex: 'queryStepParam',
      key: 'queryStepParam1',
       render: (text) => <span>{JSON.parse(text)[0].name}</span>
    }]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: pagination.current
  }

  const getBodyWrapper = body => isMotion ? <TableBodyWrapper {...getBodyWrapperProps} body={body} /> : body

  return (
    <div>
      <Table
        className={classnames({[styles.table]: true, [styles.motion]: isMotion})}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={pagination}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

list.propTypes = {
  loading: PropTypes.bool,
  dataSource: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object
}

export default list
