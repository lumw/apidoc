/**
 * @apiDefine Group_Operation Operation
 */

/**
 * @apidefine request_Operation
 * @apiparam {Object} operation
 * @apiParam {Number} operation.userId the unique identifer of a user
 * @apiParam {Number} operation.accountId the unique identifer of a user's account
 * @apiParam {Number} operation.ufocatcherId the unique identifer of a ufoCatcher
 * @apiParam {Number} operation.actioncode 开始游戏 0001, 向南移动 0002, 向北移动 0003, 向西移动 0004, 向东移动 0005, 抓取娃娃 0006
 * @apiParam {String} operation.create_dt_tm the operation create time 

 */

 /**
  * @apidefine response_CreateOperation
  * @apiSuccess {Object[]} re
  * @apiSuccess {Number} leaderboard.userId the unique identifer of a user
  * @apiSuccess {String} leaderboard.nickName
  * @apiSuccess {Number} leaderboard.score
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
  * @apiuse UrlParameter_AccountId
  *
  * @apiuse request_Operation
  *
  * @apiError {String} reasonCode
  */

