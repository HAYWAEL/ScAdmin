const qs = require('qs')
const Mock = require('mockjs')
import mockStorge from '../src/utils/mockStorge'

let dataKey = mockStorge('MobileCity', Mock.mock({
    'data|1-100': [
        {
            callbill:'@boolean',
            code:'@boolean',
            "id|+1":1,
            "jsName":"anhui_dianxin",
            name:"安徽电信",
            "operatorType|1-3": 1,
            phoneCode:'@boolean',
            "provinceId|+3": 1,
            queryStepParam:"[{\"loginTypeId\":\"login1\",\"name\":\"\",\"loginStepDetail\":[{\"currentStep\":1,\"stepName\":\"\",\"loginParam\":[{\"name\":\"customerId\",\"note\":\"\",\"type\":\"string\"},{\"name\":\"password\",\"note\":\"\",\"type\":\"string\"},{\"name\":\"code\",\"note\":\"\",\"type\":\"string\"}],\"preStep\":null,\"nextStep\":null}]},{\"loginTypeId\":\"login2\",\"name\":\"\",\"loginStepDetail\":[{\"currentStep\":1,\"stepName\":\"\",\"loginParam\":[{\"name\":\"userName\",\"note\":\"\",\"type\":\"string\"},{\"name\":\"password\",\"note\":\"\",\"type\":\"string\"},{\"name\":\"code\",\"note\":\"\",\"type\":\"string\"}],\"preStep\":null,\"nextStep\":null}]},{\"loginTypeId\":\"login3\",\"name\":\"\",\"loginStepDetail\":[{\"currentStep\":1,\"stepName\":\"\",\"loginParam\":[{\"name\":\"email\",\"note\":\"\",\"type\":\"string\"},{\"name\":\"password\",\"note\":\"\",\"type\":\"string\"},{\"name\":\"code\",\"note\":\"\",\"type\":\"string\"}],\"preStep\":null,\"nextStep\":null}]}]",
            "state|1-2": 1
        }
    ],
    page: {
    total: 100,
    current: 1
  }
}))

let cityListData = global[dataKey]
let mobileData=''
module.exports={
    "GET /api/getThxdCity"(req,res){
        const page=qs.parse(req.query)
        const pageSize=page.pageSize||10
        const currentPage=page.page||1
        let data
        let newPage
        let newData=cityListData.data.concat()
        if(page.field){
            const d=newData.filter(function(item){
                return item[page.field].indexOf(decodeURI(page.keyword))>-1
            })
            data=d.slice((currentPage-1)*pageSize,currentPage*pageSize)
            newPage={
                current:currentPage*1,
                total:d.length
            }

        }else{
            data=cityListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
            cityListData.page.current=currentPage*1
            newPage=cityListData.page
        }
        res.json({success:true,data,page:{...newPage,pageSize:Number(pageSize)}})
    }
}