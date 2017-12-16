/**
 * @apiDefine Group_Operation Operation
 */

/**
 * @apidefine request_Operation
 * @apiparam {Object} operation
 * @apiParam {Number} operation.userId the unique identifer of a user
 * @apiParam {Number} operation.accountId the unique identifer of a user's account
 * @apiParam {String} operation.ufoCatcherId the unique identifer of a ufoCatcher
 * @apiParam {String} operation.actionCode 开始游戏 0001, 向南移动 0002, 向北移动 0003, 向西移动 0004, 向东移动 0005, 抓取娃娃 0006
 * @apiParam {String} operation.create_dt_tm the operation create time 

 */

 /**
  * @apidefine response_Operation
  * @apiSuccess {String} operationId
  *
  * @apiError {String} reasonCode
  */

  /**
  * @api {post} /poseidon/operation/ Create Operation
  * @apiName CreateOperation
  * @apiVersion 1.0.0
  * @apiGroup Group_Operation
  *
  * @apiuse HeaderParameters
  *
  * @apiuse request_Operation
  *
  * @apiuse response_Operation
  */


/**
 * @apidefine retrieveResult_request
 * @apiParam  {Number} userId 用户唯一标识
 * @apiParam {String} operationId 每局游戏唯一标识
 */

/**
 * @apidefine retrieveResult_response
 * @apiSuccess {Object} gameResult
 * @apiSuccess {String} gameResult.operationId 每局游戏唯一标识
 * @apiSuccess {String} gameResult.userId 用户唯一标识
 * @apiSuccess {String} gameResult.accountId 账户唯一标识
 * @apiSuccess {String} gameResult.ufoCatcherid 娃娃机编号
 * @apiSuccess {String} gameResult.gameRsult 游戏结果 0-失败 1-成功
 * @apiSuccess {String} gameResult.eardedScore 获取到的积分
 * @apiSuccess {String} gameResult.lostedCorcy 消耗的游戏币
 *
 * @apiError {String} reasonCode
 */

/**
 * @api {get} /poseidon/operation/result?jsondata={...} Retrieve the result of game
 * @apiName RetrieveGameResult
 * @apiVersion 1.0.0
 * @apiGroup Group_Operation
 *
 * @apiuse HeaderParameters
 *
 * @apiuse retrieveResult_request
 *
 * @apiuse retrieveResult_response
 */
