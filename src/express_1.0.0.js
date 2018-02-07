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
 * @apidefine request_express_service
 * @apiparam {Object} expressService
 * @apiParam {Number} expressService.userId 用户ID
 * @apiParam {String} expressService.type 邮寄类型  娃娃-Doll(目前默认传Doll)
 * @apiParam {String} [expressService.companyName] 快递公司名称
 * @apiParam {String} [expressService.fee] 快递费用
 * @apiParam {Object[]} [expressService.doll] 当邮寄类型为Doll时，该节点必须有值
 * @apiParam {Number} expressService.doll.dollId  娃娃编号
 * @apiParam {String} expressService.doll.dollName 娃娃名称
 * @apiParam {String} expressService.doll.dollImgUrl 娃娃图片
 * @apiParam {Number} expressService.doll.quantity 娃娃个数
 * @apiParam {String} expressService.doll.recCreateDtTm 抓中娃娃时间
 * @apiParam {Object} expressService.expressAddress 收货地址信息
 * @apiParam {String} expressService.expressAddress.consigneeName 收货人姓名
 * @apiParam {String} expressService.expressAddress.consigneeMobi 收货人手机号码
 * @apiParam {String} [expressService.expressAddress.consigneeTel]  固定电话
 * @apiParam {String} expressService.expressAddress.consigneeProv 省份
 * @apiParam {String} expressService.expressAddress.consigneeCity 城市
 * @apiParam {String} expressService.expressAddress.consigneeDist 区
 * @apiParam {String} expressService.expressAddress.consigneeAddr 详细地址
 * @apiParam {String} [expressService.expressAddress.consigneePostCde] 邮政编码
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


/**
 * @api {post} /poseidon/express Express Service
 * @apiName ExpressService
 * @apiVersion 1.0.0
 * @apiGroup Group_Express
 *
 * @apiuse HeaderParameters
 *
 * @apiuse request_express_service
 *
 * @apiuse response_erroeCode_only
 */