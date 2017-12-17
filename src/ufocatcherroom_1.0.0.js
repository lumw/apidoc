/**
 * @apiDefine Group_Room Room
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
 * @apiSuccess {Object} ufoCatcherRoom.owner 当前占用娃娃机的用户信息
 * @apiSuccess {Number} ufoCatcherRoom.owner.userId userId
 * @apiSuccess {String} ufoCatcherRoom.owner.wechatId wechatId
 * @apiSuccess {String} ufoCatcherRoom.owner.wechatName 微信昵称
 * @apiSuccess {String} ufoCatcherRoom.owner.wechatHeadImgUrl 微信头像
 * @apiSuccess {Number} ufoCatcherRoom.observerQuantity 房间人数
 *
 * @apiError {String} reasonCode
 */

/**
 * @api {post} /poseidon/ufocatcher/room Operate Room
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


/**
 * @apidefine request_retrieve_room_details
 * @apiParam {String} ufoCatcherId 娃娃机编号
 */
/**
 * @api {get} /poseidon/ufocatcher/room/:ufocatcherId Retrieve Room Details
 * @apiName RetrieveRoomDetails
 * @apiVersion 1.0.0
 * @apiGroup Group_Room
 *
 * @apiuse HeaderParameters
 *
 * @apiuse response_ufoCatcherRoom
 */