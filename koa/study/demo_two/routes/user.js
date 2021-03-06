const Router = require('koa-router')
const route = new Router()

/**
 *
 * @apiDefine RkNotFoundException
 *
 * @apiError RkNotFoundException 找不到相关数据
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {
 *           "code": 404,
 *           "msg": "",
 *           "path" ""
 *       }
 *     }
 *
 */

/**
 *
 * @api {get} /user/getUser?id=1 获取设备上报实时信息
 * @apiVersion 1.0.0
 * @apiName GetUeRealTimeInfo
 * @apiGroup UE
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeader {String} firm 厂商编码
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org",
 *       "firm": "cnE="
 *     }
 *
 * @apiParam {String} sn 设备序列号
 *
 * @apiSuccess {String} sn 设备序列号
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} soc 电池电量百分比
 * @apiSuccess {Number} voltage 电池电压
 * @apiSuccess {Number} current 电池电流
 * @apiSuccess {Number} temperature 电池温度
 * @apiSuccess {String} reportTime 上报时间(yyyy-MM-dd HH:mm:ss)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "sn": "P000000000",
 *       "status": 0,
 *       "soc": 80,
 *       "voltage": 60.0,
 *       "current": 10.0,
 *       "temperature": null,
 *       "reportTime": "2018-08-13 18:11:00"
 *     }
 *
 * @apiUse RkNotFoundException
 *
 */
route.get('/getUser', async ctx => {
  const id = ctx.query.id
  ctx.body = {
    id,
    code: 1
  }
})

/**
 *
 * @apiDefine RkNotFoundException
 *
 * @apiError RkNotFoundException 找不到相关数据
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {
 *           "code": 404,
 *           "msg": "",
 *           "path" ""
 *       }
 *     }
 *
 */

/**
 *
 * @api {get} /user/getAll?id=1 获取全部用户信息
 * @apiVersion 3.1.0
 * @apiName GetUeRealTimeInfo
 * @apiGroup 用户
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeader {String} firm 厂商编码
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org",
 *       "firm": "cnE="
 *     }
 *
 * @apiParam {String} sn 设备序列号
 *
 * @apiSuccess {String} sn 设备序列号
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} soc 电池电量百分比
 * @apiSuccess {Number} voltage 电池电压
 * @apiSuccess {Number} current 电池电流
 * @apiSuccess {Number} temperature 电池温度
 * @apiSuccess {String} reportTime 上报时间(yyyy-MM-dd HH:mm:ss)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "sn": "P000000000",
 *       "status": 0,
 *       "soc": 80,
 *       "voltage": 60.0,
 *       "current": 10.0,
 *       "temperature": null,
 *       "reportTime": "2018-08-13 18:11:00"
 *     }
 *
 * @apiUse RkNotFoundException
 *
 */
route.get('/getAll', async ctx => {
  const id = ctx.query.id
  ctx.body = {
    id,
    data: [
      { name: '张三', age: 12, id: 1 },
      { name: '张三', age: 12, id: 2 },
      { name: '张三', age: 12, id: 3 },
      { name: '张三', age: 12, id: 4 }
    ]
  }
})

module.exports = route
