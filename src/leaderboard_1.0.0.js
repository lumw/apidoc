/**
 * @apiDefine Group_LeaderBoard LeaderBoard
 */

/**
 * @apidefine LeaderBoard
 * @apiParam {String="D" "W", "MO", "HI"} period the period of leaderboard. D=Daily W=Weekly, MO=Monthly, HI=History
 * @apiParam {Number} limit the maximum number of records that can be retrieved
 */

 /**
  * @apidefine response_LeaderBoard
  * @apiSuccess {Object[]} leaderboard
  * @apiSuccess {String} leaderboard.period period the period of leaderboard. D=Daily W=Weekly, MO=Monthly, HI=History
  * @apiSuccess {Object[]} leaderboard.boards
  * @apiSuccess {Number} leaderboard.boards.userId the unique identifer of a user
  * @apiSuccess {String} leaderboard.boards.nickName 微信昵称
  * @apiSuccess {String} leaderboard.boards.wechatHeadImgUrl 微信头像
  * @apiSuccess {Number} leaderboard.boards.score
  *
  * @apiError {String} reasonCode
  */

 /**
  * @api {get} /poseidon/leaderboard/wealth?jsondata={...} Retrieve the LeaderBoard of Wealth
  * @apiName RetrieveWealthLeaderBoard
  * @apiVersion 1.0.0
  * @apiGroup Group_LeaderBoard
  *
  * @apiuse HeaderParameters
  * @apiuse LeaderBoard
  * 
  * @apiuse response_LeaderBoard
  */

 /**
  * @api {get} /poseidon/leaderboard/charm?jsondata={...} Retrieve the LeaderBoard of Charm
  * @apiName RetrieveCharmLeaderBoard
  * @apiVersion 1.0.0
  * @apiGroup Group_LeaderBoard
  *
  * @apiuse HeaderParameters
  * @apiuse LeaderBoard
  *
  * @apiuse response_LeaderBoard
  */

 /**
  * @api {get} /poseidon/leaderboard/donate?jsondata={...} Retrieve the LeaderBoard of Donate
  * @apiName RetrieveDonateLeaderBoard
  * @apiVersion 1.0.0
  * @apiGroup Group_LeaderBoard
  *
  * @apiuse HeaderParameters
  * @apiuse LeaderBoard
  *
  * @apiuse response_LeaderBoard
  */