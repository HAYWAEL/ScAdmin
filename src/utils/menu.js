module.exports = [
  {
    key: 'dashboard',
    name: '仪表盘',
    icon: 'laptop'
  },
  {
    key: 'users',
    name: '用户管理',
    icon: 'user'
  },
  {
    key: 'ui',
    name: 'UI组件',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'ico',
        name: 'Ico 图标'
      },
      {
        key: 'search',
        name: 'Search 搜索'
      },
      {
        key: 'dropOption',
        name: 'DropOption 下拉操作'
      }
    ]
  },
  {
    key: 'Gjj',
    name: '公积金',
    icon: 'bank',
    child: [
      {
        key: 'gjjQuery',
        name: '公积金查询'
      },
      {
        key: 'gjjSetting',
        name: '公积金城市配置',
       
      }
    ]
  },
  {
    key: 'mobile',
    name: '运营商认证',
    icon: 'phone',
    child: [
      {
        key: 'mobileQuery',
        name: '运营商授权'
      },
      {
        key: 'mobileSetting',
        name: '运营商城市配置',
       
      }
    ]
  }
]
