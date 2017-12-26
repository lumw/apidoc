/**
 * @apiDefine Group_Express Express
 */

/**
 * @apidefine request_create_express_address
 * @apiparam {Object} expressAddress
 * @apiParam {Number} expressAddress.userId 用户ID
 * @apiParam {String} expressAddress.consigneeName 收货人姓名
 * @apiParam {String} expressAddress.consigneeMobi 收货人手机号码
 * @apiParam {String} [expressAddress.consigneeTel]  固定电话
 * @apiParam {String} expressAddress.consigneeProv 省份
 * @apiParam {String} expressAddress.consigneeCity 城市
 * @apiParam {String} expressAddress.consigneeDist 区
 * @apiParam {String} expressAddress.consigneeAddr 详细地址
 * @apiParam {String} [expressAddress.consigneePostCde] 邮政编码
 * @apiParam {Number} expressAddress.defaultFlag 默认地址标识  1-默认地址  0-非默认地址
 * @apiParam {Number} [expressAddress.sequence] 序列号
 */

/**
 * @apidefine response_express_address
 * @apiSuccess {Object} expressAddress
 * @apiSuccess {Number} expressAddress.userId 用户ID
 * @apiSuccess {String} expressAddress.consigneeName 收货人姓名
 * @apiSuccess {String} expressAddress.consigneeMobi 收货人手机号码
 * @apiSuccess {String} [expressAddress.consigneeTel]  固定电话
 * @apiSuccess {String} expressAddress.consigneeProv 省份
 * @apiSuccess {String} expressAddress.consigneeCity 城市
 * @apiSuccess {String} expressAddress.consigneeDist 区
 * @apiSuccess {String} expressAddress.consigneeAddr 详细地址
 * @apiSuccess {String} [expressAddress.consigneePostCde] 邮政编码
 * @apiSuccess {Number} expressAddress.defaultFlag 默认地址标识  1-默认地址  0-非默认地址
 * @apiSuccess {Number} expressAddress.sequence 序列号
 *
 * @apiError {String} errorCode
 */

/**
 * @apidefine request_update_express_address
 * @apiparam {Object} expressAddress
 * @apiParam {Number} expressAddress.userId 用户ID
 * @apiParam {String} expressAddress.consigneeName 收货人姓名
 * @apiParam {String} expressAddress.consigneeMobi 收货人手机号码
 * @apiParam {String} [expressAddress.consigneeTel]  固定电话
 * @apiParam {String} expressAddress.consigneeProv 省份
 * @apiParam {String} expressAddress.consigneeCity 城市
 * @apiParam {String} expressAddress.consigneeDist 区
 * @apiParam {String} expressAddress.consigneeAddr 详细地址
 * @apiParam {String} [expressAddress.consigneePostCde] 邮政编码
 * @apiParam {Number} expressAddress.defaultFlag 默认地址标识  1-默认地址  0-非默认地址
 * @apiParam {Number} expressAddress.sequence 序列号
 */

/**
 * @apidefine request_delete_express_address
 * @apiparam {Object} expressAddress
 * @apiParam {Number} expressAddress.userId 用户ID
 * @apiParam {Number} expressAddress.sequence 序列号
 */

/**
 * @apidefine response_retrieve_express_address
 * @apiSuccess {Object[]} expressAddress 用户全部邮寄地址
 * @apiSuccess {Number} expressAddress.userId 用户ID
 * @apiSuccess {String} expressAddress.consigneeName 收货人姓名
 * @apiSuccess {String} expressAddress.consigneeMobi 收货人手机号码
 * @apiSuccess {String} [expressAddress.consigneeTel]  固定电话
 * @apiSuccess {String} expressAddress.consigneeProv 省份
 * @apiSuccess {String} expressAddress.consigneeCity 城市
 * @apiSuccess {String} expressAddress.consigneeDist 区
 * @apiSuccess {String} expressAddress.consigneeAddr 详细地址
 * @apiSuccess {String} [expressAddress.consigneePostCde] 邮政编码
 * @apiSuccess {Number} expressAddress.defaultFlag 默认地址标识  1-默认地址  0-非默认地址
 * @apiSuccess {Number} expressAddress.sequence 收货地址序号
 *
 * @apiError {String} errorCode
 */




/**
 * @api {post} /poseidon/express/address Create Express Address
 * @apiName CreateExpressAddress
 * @apiVersion 1.0.0
 * @apiGroup Group_Express
 *
 * @apiuse HeaderParameters
 *
 * @apiuse request_create_express_address
 *
 * @apiuse response_express_address
 */


/**
 * @api {get} /poseidon/express/address/:userId Retrieve Express Address
 * @apiName RetrieveExpressAddress
 * @apiVersion 1.0.0
 * @apiGroup Group_Express
 *
 * @apiuse HeaderParameters
 *
 * @apiuse response_retrieve_express_address
 */

/**
 * @api {put} /poseidon/express/address Update Express Address
 * @apiName UpdateExpressAddress
 * @apiVersion 1.0.0
 * @apiGroup Group_Express
 *
 * @apiuse HeaderParameters
 *
 * @apiuse request_update_express_address
 *
 * @apiuse response_express_address
 */

/**
 * @api {delete} /poseidon/express/address Delete Express Address
 * @apiName DeleteExpressAddress
 * @apiVersion 1.0.0
 * @apiGroup Group_Express
 *
 * @apiuse HeaderParameters
 *
 * @apiuse request_delete_express_address
 *
 * @apiuse response_erroeCode_only
 */