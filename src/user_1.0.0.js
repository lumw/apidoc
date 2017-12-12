/**
 * @apiDefine Group_User User
 */

/**
 * @apidefine request_User
 * @apiparam {Object} user
 * @apiParam {String} user.userName
 * @apiParam {Number} user.nickName
 * @apiParam {String} user.weChatNickName
 * @apiParam {String} user.wechatId
 * @apiParam {String} user.gender
 * @apiParam {Number} [user.age]
 * @apiParam {Number} [user.email]
 * @apiParam {Number} [user.phoneNumber]
 * @apiParam {Number} [user.address]
 * @apiParam {String} [user.province]
 * @apiParam {String} [user.city]
 */


/**
 * @apidefine response_Create_User
 * @apiSuccess {Object} user
 * @apiSuccess {Number} user.userId
 * @apiSuccess {String} user.userName
 * @apiSuccess {Number} user.nickName
 * @apiSuccess {String} user.weChatNickName
 * @apiSuccess {String} user.wechatId
 * @apiSuccess {String} user.gender
 * @apiSuccess {Number} [user.age]
 * @apiSuccess {Number} [user.email]
 * @apiSuccess {Number} [user.phoneNumber]
 * @apiSuccess {Number} [user.address]
 * @apiSuccess {String} [user.province]
 * @apiSuccess {String} [user.city]
 * @apiSuccess {String} [user.rec_cteat_dt_tm]
 * @apiSuccess {String} [user.rec_upt_dt_tm]
 * @apiSuccess {Object} account[]
 * @apiSuccess {Number} account.accountId
 * @apiSuccess {String} account.accountType
 * @apiSuccess {String} account.userId
 * @apiSuccess {Number} account.balance
 * @apiSuccess {String} account.recCreatDtTm
 * @apiSuccess {String} account.recUptDtTm
 * @apiSuccess {Number} account.status
 *
 * @apiError {String} reasonCode
 */


/**
 * @apidefine response_Retrieve_User
 * @apiSuccess {Object} user
 * @apiSuccess {Number} user.userId
 * @apiSuccess {String} user.userName
 * @apiSuccess {Number} user.nickName
 * @apiSuccess {String} user.weChatNickName
 * @apiSuccess {String} user.wechatId
 * @apiSuccess {String} user.gender
 * @apiSuccess {Number} [user.age]
 * @apiSuccess {Number} [user.email]
 * @apiSuccess {Number} [user.phoneNumber]
 * @apiSuccess {Number} [user.address]
 * @apiSuccess {String} [user.province]
 * @apiSuccess {String} [user.city]
 * @apiSuccess {String} [user.rec_cteat_dt_tm]
 * @apiSuccess {String} [user.rec_upt_dt_tm]
 *
 * @apiError {String} reasonCode
 */

 /**
  * @api {post} /poseidon/user/ Create User
  * @apiName CreateUser
  * @apiVersion 1.0.0
  * @apiGroup Group_User
  *
  * @apiuse HeaderParameters
  * @apiuse request_User
  *
  * @apiuse response_Create_User
  */


  /**
   * @api {put} /poseidon/user/:userId Update User
   * @apiName UpdateUser
   * @apiVersion 1.0.0
   * @apiGroup Group_User
   *
   * @apiuse HeaderParameters
   * @apiuse UrlParameter_UserId
   *
   * @apiuse response_Retrieve_User
  */

 
 /**
  * @api {get} /poseidon/user/:userId Retrieve User
  * @apiName RetrieveUser
  * @apiVersion 1.0.0
  * @apiGroup Group_User
  *
  * @apiuse HeaderParameters
  * @apiuse UrlParameter_UserId
  *
  * @apiuse response_Retrieve_User
  */

