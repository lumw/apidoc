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
 * @apiError {String} errorCode
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
 * @apiError {String} errorCode
 */

/**
 * @apidefine response_Retrieve_User_Score_Record
 * @apiSuccess {Number} currScore 当前积分值
 * @apiSuccess {Object[]} tradeScoreIncresse 增长的积分记录
 * @apiSuccess {Number} tradeScoreIncresse.tradeId 记录id
 * @apiSuccess {Number} tradeScoreIncresse.prevScore 积分变动之前的数值
 * @apiSuccess {Number} tradeScoreIncresse.currScore 积分变动之后的数值
 * @apiSuccess {Number} tradeScoreIncresse.quantity 变动的数值
 * @apiSuccess {String="Login" "Exchange", "Catch_Reward", "Invitation_Reward"} tradeScoreIncresse.changeReson 积分变动原因 Login:登陆奖励 Exchange:积分兑换 Catch_Reward:抓中娃娃奖励 Invitation_Reward:邀请奖励
 * @apiSuccess {String} tradeScoreIncresse.recCreatDtTm 积分变动时间
 * @apiSuccess {Object[]} tradeScoreDeduct 减少的积分记录
 * @apiSuccess {Number} tradeScoreDeduct.tradeId 记录id
 * @apiSuccess {Number} tradeScoreDeduct.prevScore 积分变动之前的数值
 * @apiSuccess {Number} tradeScoreDeduct.currScore 积分变动之后的数值
 * @apiSuccess {Number} tradeScoreDeduct.quantity 变动的数值
 * @apiSuccess {String="Login" "Exchange", "Catch_Reward", "Invitation_Reward"} tradeScoreDeduct.changeReson 积分变动原因 Login:登陆奖励 Exchange:积分兑换 Catch_Reward:抓中娃娃奖励 Invitation_Reward:邀请奖励
 * @apiSuccess {String} tradeScoreDeduct.recCreatDtTm 积分变动时间
 * @apiError {String} errorCode
 */

/**
 * @apidefine response_Retrieve_User_Currency_Record
 * @apiSuccess {Number} currCurrency 当前游戏币
 * @apiSuccess {Object[]} tradeCurrency 增长的游戏币记录
 * @apiSuccess {Number} tradeCurrency.tradeId 记录id
 * @apiSuccess {Number} tradeCurrency.prevScore 游戏币变动之前的数值
 * @apiSuccess {Number} tradeCurrency.currScore 游戏币变动之后的数值
 * @apiSuccess {Number} tradeCurrency.quantity 变动的数值
 * @apiSuccess {String="PlayGame" "Exchange_By_Score", "Charge", "Reward"} tradeCurrency.changeReson 游戏币变动原因 PlayGame:游戏扣除 Exchange_By_Score:积分兑换 Charge:充值 Reward:奖励
 * @apiSuccess {String} tradeCurrency.recCreatDtTm 游戏币变动时间
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
 * @apidefine request_User_Exchange
 * @apiparam {Object} exchange
 * @apiParam {Number} exchange.userId 用户ID
 * @apiParam {Number} exchange.exchangeType 兑换类型 目前默认1
 * @apiParam {Number} exchange.score 积分数量
 * @apiParam {Number} exchange.currency 游戏币数量
 */

/**
 * @apidefine response_User_Exchange
 * @apiSuccess {Object} account[]
 * @apiSuccess {Number} account.accountId 账户ID
 * @apiSuccess {String} account.accountType 1-游戏币账户 2-积分账户
 * @apiSuccess {String} account.userId 用户ID
 * @apiSuccess {Number} account.balance 余额
 * @apiSuccess {Number} account.status 状态
 *
 * @apiError {String} errorCode
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

/**
 * @api {get} /poseidon/user/currency/:userId Retrieve User Currency Record
 * @apiName RetrieveUserCurrencyRecord
 * @apiVersion 1.0.0
 * @apiGroup Group_User
 *
 * @apiuse HeaderParameters
 * @apiuse UrlParameter_UserId
 *
 * @apiuse response_Retrieve_User_Currency_Record
 */

/**
 * @api {post} /poseidon/user/exchange Exchange
 * @apiName Exchange
 * @apiVersion 1.0.0
 * @apiGroup Group_User
 *
 * @apiuse HeaderParameters
 * @apiuse request_User_Exchange
 *
 * @apiuse response_User_Exchange
 */