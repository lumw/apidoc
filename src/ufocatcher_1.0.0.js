/**
 * @apiDefine Group_UFOCatcher UFOCatcher
 */

 /**
  * @apidefine response_ufocatcher
  * @apiSuccess {Object[]} ufocatcher
  * @apiSuccess {Number} ufocatcher.ufocatcherId the unique identifer of a ufoCatcher
  * @apiSuccess {Number} ufocatcher.dollTypeId the type Id of the doll that inside the ufoCatcher
  * @apiSuccess {Number} ufocatcher.status  status of ufoCatcher
  *
  * @apiError {String} reasonCode
  */

 /**
  * @api {get} /poseidon/ufocatcher Retrieve All ufoCatcher information
  * @apiName RetrieveUFOCatcher
  * @apiVersion 1.0.0
  * @apiGroup Group_UFOCatcher
  *
  * @apiuse HeaderParameters
  * 
  * @apiuse response_ufocatcher
  */

 /**
  * @api {get} /poseidon/ufocatcher/:ufocatcherId Retrieve ufoCatcher by Id
  * @apiName RetrieveUFOCatcherbyId
  * @apiVersion 1.0.0
  * @apiGroup Group_UFOCatcher
  *
  * @apiuse HeaderParameters
  *
  * @apiuse response_ufocatcher
  */