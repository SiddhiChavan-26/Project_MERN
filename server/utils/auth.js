const jwt = require('jsonwebtoken')

const config = require('./config')
const result = require('./result')

function authUser(req, res, next) {
    const allAllowedURLs = ['/user/login', '/user/signUp','/user/all-active-courses']
    if(allAllowedURLs.includes(req.url)) next();
    else{
        const token = req.headers.token
        console.log(token)

        if(!token) res.send(result.createResult("Token is missing"));
        else{
            try{
                const payload = jwt.verify(token, config.SECRET)
                console.log("payload : ", payload)

                req.headers.email = payload.email
                req.headers.role = payload.role

                return next();
            }
            catch(ex){
                console.log("ex", ex);
                return res.send(result.createResult("Token is Invalid"));
            }
        }
    }
}

function checkAuthorization(req, res, next){
    const role = req.headers.role
    console.log("current user role : ", role)

    if(role === 'admin'){
        return next();
    }
    return  res.send(result.createResult("Unauthorized access"))
    
}

module.exports = { authUser, checkAuthorization};