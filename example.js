var curUser = {
    name : 'James'
}
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 0.1.0 
 * @apiParam {Number} id Users unique ID.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
function getUsers(){
    return{code:200,data:curUser};
}
/**
 * @api {set} /user Set name 
 * @apiName SetName
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiParam {String} name Name of User
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 * 
 * 
 * 
 */
function setName(name){
    if(name.length===0){
        return{code:400,message:'NameEmptyError'};
    }
    curUser.name=name;
    return{code:204};
}