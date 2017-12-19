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
 * @apidefine quit_game_request
 * @apiparam {Object} quitGame
 * @apiParam {Number} quitGame.userId the unique identifer of a user
 * @apiParam {String} quitGame.ufoCatcherId the unique identifer of a ufoCatcher
 */

/**
 * @apidefine quit_game_response
 *
 * @apiError {String} reasonCode
 */

 /**
  * @apidefine response_Operation
  * @apiSuccess {String} operationId
  *
  * @apiError {String} reasonCode
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
 * @apiSuccess {int} gameResult.userId 用户唯一标识
 * @apiSuccess {int} gameResult.accountId 账户唯一标识
 * @apiSuccess {String} gameResult.ufoCatcherid 娃娃机编号
 * @apiSuccess {int} gameResult.gameRsult 游戏结果 0-失败 1-成功
 * @apiSuccess {int} gameResult.eardedScore 获取到的积分
 * @apiSuccess {int} gameResult.lostedCurcy 消耗的游戏币
 * @apiSuccess {String} gameResult.startDtTm 游戏开始时间 yyyy/MM/dd hh:mm:ss
 * @apiSuccess {String} gameResult.endDtTm 游戏结束时间 yyyy/MM/dd hh:mm:ss
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
 * @api {get} /poseidon/operation/result?jsondata={...} Retrieve Game Result
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


/**
 * @api {post} /poseidon/operation/quitgame Quit Game
 * @apiName QuitGame
 * @apiVersion 1.0.0
 * @apiGroup Group_Operation
 *
 * @apiuse HeaderParameters
 *
 * @apiuse quit_game_request
 *
 * @apiuse quit_game_response
 */