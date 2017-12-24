/**
 * @apiDefine Group_UFOCatcher UFOCatcher
 */

 /**
  * @apidefine response_AllOnlineUfoCatcher
  * @apiSuccess {Object[]} ufoCatcher
  * @apiSuccess {String} ufocatcher.ufoCatcherid the unique identifer of a ufoCatcher
  * @apiSuccess {String} ufocatcher.lastLoginDtTm  娃娃机上次登录时间
  * @apiSuccess {Number} ufocatcher.catcherStatus  娃娃机状态
  * @apiSuccess {Number} ufocatcher.gameDiffLevel  该娃娃机游戏难度等级
  * @apiSuccess {Number} ufocatcher.gameScore  娃娃机每局游戏成功后获取积分
  * @apiSuccess {Number} ufocatcher.gameCurcny 娃娃机每局游戏消耗游戏币
  * @apiSuccess {String} ufocatcher.frontCameraUrl 正面摄像头直播地址
  * @apiSuccess {String} ufocatcher.lateralCameraUrl 侧面摄像头直播地址
  * @apiSuccess {String} ufocatcher.chatGroupId 娃娃机对应的IM聊天群组ID
  * @apiSuccess {Object} ufocatcher.doll
  * @apiSuccess {Number} ufocatcher.doll.dollId 娃娃ID
  * @apiSuccess {String} ufocatcher.doll.dollName 娃娃名称
  * @apiSuccess {String} ufocatcher.doll.dollImgUrl 娃娃图片url
  * @apiSuccess {String} ufocatcher.doll.dollDesc 娃娃描述
  * @apiSuccess {Object} ufocatcher.owner
  * @apiSuccess {Number} ufocatcher.owner.userId 当前操作娃娃机玩家的userid
  * @apiSuccess {String} ufocatcher.owner.wechatId 用户微信Id
  * @apiSuccess {String} ufocatcher.owner.wechatkName 微信昵称
  * @apiSuccess {String} ufocatcher.owner.wechatHeadImgUrl 微信头像
  *
  * @apiError {String} reasonCode
  */

/**
 * @apidefine response_OnlineUfoCatcherById
 * @apiSuccess {Object} ufoCatcher
 * @apiSuccess {String} ufocatcher.ufoCatcherid the unique identifer of a ufoCatcher
 * @apiSuccess {String} ufocatcher.lastLoginDtTm  娃娃机上次登录时间
 * @apiSuccess {Number} ufocatcher.catcherStatus  娃娃机状态
 * @apiSuccess {Number} ufocatcher.gameDiffLevel  该娃娃机游戏难度等级
 * @apiSuccess {Number} ufocatcher.gameScore  娃娃机每局游戏成功后获取积分
 * @apiSuccess {Number} ufocatcher.gameCurcny 娃娃机每局游戏消耗游戏币
 * @apiSuccess {String} ufocatcher.frontCameraUrl 正面摄像头直播地址
 * @apiSuccess {String} ufocatcher.lateralCameraUrl 侧面摄像头直播地址
 * @apiSuccess {String} ufocatcher.chatGroupId 娃娃机对应的IM聊天群组ID
 * @apiSuccess {Object} ufocatcher.doll
 * @apiSuccess {Number} ufocatcher.doll.dollId 娃娃ID
 * @apiSuccess {String} ufocatcher.doll.dollName 娃娃名称
 * @apiSuccess {String} ufocatcher.doll.dollImgUrl 娃娃图片url
 * @apiSuccess {String} ufocatcher.doll.dollDesc 娃娃描述
 * @apiSuccess {Object} ufocatcher.owner
 * @apiSuccess {Number} ufocatcher.owner.userId 当前操作娃娃机玩家的userid
 * @apiSuccess {String} ufocatcher.owner.wechatId 用户微信Id
 * @apiSuccess {String} ufocatcher.owner.wechatName 微信昵称
 * @apiSuccess {String} ufocatcher.owner.wechatHeadImgUrl 微信头像
 *
 * @apiError {String} reasonCode
 */

 /**
  * @apidefine response_ufocatcherStatus
  * @apiSuccess {Object} ufoCatcherStatus
  * @apiSuccess {String} ufoCatcherStatus.ufoCatcherid the unique identifer of a ufoCatcher
  * @apiSuccess {Number} ufoCatcherStatus.catcherStatus  娃娃机状态
  *
  * @apiError {String} reasonCode
  */

 /**
  * @apidefine response_allUfocatcherStatus
  * @apiSuccess {Object[]} ufoCatcherStatus
  * @apiSuccess {String} ufoCatcherStatus.ufoCatcherid   the unique identifer of a ufoCatcher
  * @apiSuccess {Number} ufoCatcherStatus.catcherStatus  娃娃机状态
  *
  * @apiError {String} reasonCode
  */


 /**
  * @api {get} /poseidon/ufocatcher Retrieve All Online UFOCatcher
  * @apiName RetrieveAllOnlineUFOCatcher
  * @apiVersion 1.0.0
  * @apiGroup Group_UFOCatcher
  *
  * @apiuse HeaderParameters
  * 
  * @apiuse response_AllOnlineUfoCatcher
  */

/**
 * @api {get} /poseidon/ufocatcher/status Retrieve All Online UFOCatcher Status
 * @apiName RetrieveAllOnlineUFOCatcherStatus
 * @apiVersion 1.0.0
 * @apiGroup Group_UFOCatcher
 *
 * @apiuse HeaderParameters
 *
 * @apiuse response_allUfocatcherStatus
 */

 /**
  * @api {get} /poseidon/ufocatcher/:ufocatcherId Retrieve Online UFOCatcher By ufoCatcherId
  * @apiName RetrieveAllOnlineUFOCatcherById
  * @apiVersion 1.0.0
  * @apiGroup Group_UFOCatcher
  *
  * @apiuse HeaderParameters
  *
  * @apiuse response_OnlineUfoCatcherById
  */

/**
 * @api {get} /poseidon/ufocatcher/status/:ufoCatcherId Retrieve Online UFOCatcher Status By ufoCatcherId
 * @apiName RetrieveOnlineUFOCatcherStatusById
 * @apiVersion 1.0.0
 * @apiGroup Group_UFOCatcher
 *
 * @apiuse HeaderParameters
 *
 * @apiuse response_ufocatcherStatus
 */