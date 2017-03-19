const qs = require('qs')
const Mock = require('mockjs')
import mockStorge from '../src/utils/mockStorge'

let dataKey = mockStorge('GjjCityInfo', Mock.mock({
    'data|1-400': [
        {
            
                'id|+1':1,
                hasBasicInfo: '@boolean',
                hasCompanyName: '@boolean',
                hasFangbuYuejiao: '@boolean',
                hasGerenJiaocunBili: '@boolean',
                hasGongsiJiaocunBili: '@boolean',
                hasGerenYuejiao: '@boolean',
                hasGongsiYuejiao: '@boolean',
                hasId: '@boolean',
                hasIdWhole: '@boolean',
                hasJiaocunjishu: '@boolean',
                hasKaihuTime: '@boolean',
                hasName: '@boolean',
                hasNameWhole: '@boolean',
                hasTotalJiaocunBili: '@boolean',
                hasYue: '@boolean',
                hasYuejiao: '@boolean',
                hasZhuangTai: '@boolean',
                hasZuihoujiaocunTime: '@boolean',
                "queryStepParam|1-3": [
                    { "loginParam": [{ "note": "", "name": "gjjAccount", "type": "string" }, { "note": "", "name": "password", "type": "string" }, { "note": "", "name": "code", "type": "string" }] }
                ],
                url: "http://www.hzgjj.gov.cn:8080/WebAccounts/pages/per/login.jsp",
                state: 1, 
        }],'taskId|+1': 123
}))

let GjjCityInfoData = global[dataKey]

module.exports = {
    'POST /api/gjjCityInfo'(req, res) {
        console.log(req.body.id)
      let newData = GjjCityInfoData.data[req.body.id]
      res.json(newData)
    },
    'GET /api/gjjCityList' (req, res) {
    const cityList={value:1,name:"杭州"}
    res.json({success: true, cityList})
  },

}
