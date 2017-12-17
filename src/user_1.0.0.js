/**
 * @apiDefine Group_User User
 */

/**
 * @apidefine request_User
 * @apiparam {Object} user
 * @apiParam {String} [user.userName] 用户名
 * @apiParam {Number} [user.nickName] 昵称
 * @apiParam {String} user.wechatId 微信ID
 * @apiParam {String} [user.gender] 性别 0-女 1-男
 * @apiParam {Number} [user.birthday] yyyy/MM/dd
 * @apiParam {Number} [user.email]
 * @apiParam {Number} [user.phoneNumber]
 * @apiParam {Number} [user.address]
 * @apiParam {String} [user.province]
 * @apiParam {String} [user.city]
 * @apiParam {Number} user.recCreateAppro 用户创建方式  默认 0-微信
 */


/**
 * @apidefine response_Create_User
 * @apiSuccess {Object} user
 * @apiSuccess {Number} user.userId 用户唯一标识
 * @apiSuccess {String} [user.userName] 用户名
 * @apiSuccess {String} user.wechatId 微信ID
 * @apiSuccess {Number} [user.wechatkName] 微信昵称
 * @apiSuccess {String} user.wechatHeadImgUrl 微信头像url
 * @apiSuccess {String} [user.gender] 性别 0-女 1-男
 * @apiSuccess {Number} [user.birthday] yyyy/MM/dd
 * @apiSuccess {Number} [user.email]
 * @apiSuccess {Number} [user.phoneNumber]
 * @apiSuccess {Number} [user.address]
 * @apiSuccess {String} [user.province]
 * @apiSuccess {String} [user.city]
 * @apiSuccess {Number} user.recCreateAppro 用户创建方式  默认 1-微信
 * @apiSuccess {Object} account[]
 * @apiSuccess {Number} account.accountId
 * @apiSuccess {String} account.accountType 1-游戏币账户 2-积分账户
 * @apiSuccess {String} account.userId
 * @apiSuccess {Number} account.balance
 * @apiSuccess {Number} account.status
 *
 * @apiError {String} reasonCode
 */


/**
 * @apidefine response_Retrieve_User
 * @apiSuccess {Object} user
 * @apiSuccess {Number} user.userId 用户唯一标识
 * @apiSuccess {String} [user.userName] 用户名
 * @apiSuccess {String} user.wechatId 微信ID
 * @apiSuccess {Number} [user.wechatkName] 微信昵称
 * @apiSuccess {String} user.wechatHeadImgUrl 微信头像url
 * @apiSuccess {String} [user.gender] 性别 0-女 1-男
 * @apiSuccess {Number} [user.birthday] yyyy/MM/dd
 * @apiSuccess {Number} [user.email]
 * @apiSuccess {Number} [user.phoneNumber]
 * @apiSuccess {Number} [user.address]
 * @apiSuccess {String} [user.province]
 * @apiSuccess {String} [user.city]
 * @apiSuccess {Number} user.recCreateAppro 用户创建方式 默认 1-微信
 * @apiSuccess {Object} account[]
 * @apiSuccess {Number} account.accountId
 * @apiSuccess {String} account.accountType 1-游戏币账户 2-积分账户
 * @apiSuccess {String} account.userId
 * @apiSuccess {Number} account.balance
 * @apiSuccess {Number} account.status
 *
 * @apiError {String} reasonCode
 */

/**
 * @apidefine response_Retrieve_User_Score_Record
 * @apiSuccess {Object[]} tradeScore
 * @apiSuccess {Number} tradeScore.tradeId 记录id
 * @apiSuccess {Number} tradeScore.prevScore 积分变动之前的数值
 * @apiSuccess {Number} tradeScore.currScore 积分变动之后的数值
 * @apiSuccess {Number} tradeScore.quantity 变动的数值
 * @apiSuccess {{String="Login" "Exchange", "Catch_Reward", "Invitation_Reward"}} tradeScore.changeReson 积分变动原因
 * @apiSuccess {String} tradeScore.recCreatDtTm 积分变动时间
 *
 * @apiError {String} reasonCode
 */


/**
 * @apidefine request_User_Login
 * @apiparam {Object} userLogin
 * @apiParam {String} userLogin.loginChannel 用户注册渠道  1-微信
 * @apiParam {Object} userLogin.wechatLogin
 * @apiParam {String} userLogin.wechatLogin.wechatId
 * @apiParam {String} userLogin.wechatLogin.wechatName
 * @apiParam {Number} userLogin.wechatLogin.gender
 * @apiParam {String} userLogin.wechatLogin.wechatHeadImgUrl
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


/**
 * @api {post} /poseidon/user/login User Login
 * @apiName UserLogin
 * @apiVersion 1.0.0
 * @apiGroup Group_User
 *
 * @apiuse HeaderParameters
 * @apiuse request_User_Login
 *
 * @apiuse response_Create_User
 */

/**
 * @api {get} /poseidon/user/score/:userId Retrieve User Score Record
 * @apiName RetrieveUserScoreRecord
 * @apiVersion 1.0.0
 * @apiGroup Group_User
 *
 * @apiuse HeaderParameters
 * @apiuse UrlParameter_UserId
 *
 * @apiuse response_Retrieve_User_Score_Record
 */
