/**
 * @apiDefine Group_User User
 */

/**
 * @apidefine request_User
 * @apiparam {Object} user
 * @apiParam {String} user.userName
 * @apiParam {Number} user.nickName
 * @apiParam {String} user.gender
 * @apiParam {Number} [user.age]
 * @apiParam {Number} [user.email]
 * @apiParam {Number} [user.phoneNumber]
 * @apiParam {Number} [user.address]
 * @apiParam {String} [user.province]
 * @apiParam {String} [user.city]
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
  */

