/**
 * @apiDefine Group_Room
 */

/**
 * @apidefine request_ufoCatcherRoom
 * @apiparam {Object} roomOperation
 * @apiParam {Number} roomOperation.userId userId
 * @apiParam {Number} roomOperation.ufoCatcherId 娃娃机编号
 * @apiParam {String="Join" "Quit"} roomOperation.actionCode 操作动作
 */

/**
 * @apidefine response_ufoCatcherRoom
 * @apiSuccess {Object} ufoCatcherRoom
 * @apiSuccess {Object} ufoCatcherRoom.owner
 * @apiSuccess {Number} ufoCatcherRoom.owner.userId userId
 * @apiSuccess {String} ufoCatcherRoom.owner.wechatId wechatId
 * @apiSuccess {String} ufoCatcherRoom.owner.wechatName 微信昵称
 * @apiSuccess {String} ufoCatcherRoom.owner.wechatHeadImgUrl 微信头像
 * @apiSuccess {Number} ufoCatcherRoom.observerQuantity
 *
 * @apiError {String} reasonCode
 */

/**
 * @api {post} /poseidon/room/ Room Operation
 * @apiName RoomOperation
 * @apiVersion 1.0.0
 * @apiGroup Group_Room
 *
 * @apiuse HeaderParameters
 *
 * @apiuse request_ufoCatcherRoom
 *
 * @apiuse response_ufoCatcherRoom
 */