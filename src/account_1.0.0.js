/**
 * @apiDefine Group_Account Account
 */

/**
 * @apidefine request_Account
 * @apiparam {Object} account
 * @apiParam {Number} account.accountId the unique identifer of a user's account
 * @apiParam {Number} account.balance the remaing balance of account
 * @apiParam {Number} account.userId 
 */

 /**
 * @apidefine response_Account
 * @apiSuccess {Object} account
 * @apiSuccess {Number} account.accountId the unique identifer of a user's account
 * @apiSuccess {Number} account.balance the remaing balance of account
 * @apiSuccess {Number} account.userId
 *
 * @apiError {String} reasonCode
 */


  /**
  * @api {put} /poseidon/account/:accountId Update Account
  * @apiName UpdateAccount
  * @apiVersion 1.0.0
  * @apiGroup Group_Account
  *
  * @apiuse HeaderParameters
  * @apiuse UrlParameter_AccountId
  *
  * @apiuse request_Account
  */

 
 /**
  * @api {get} /poseidon/account/:accountId Retrieve Account
  * @apiName RetrieveUser
  * @apiVersion 1.0.0
  * @apiGroup Group_Account
  *
  * @apiuse HeaderParameters
  * @apiuse UrlParameter_AccountId
  *
  * @apiuse response_Account
  */

