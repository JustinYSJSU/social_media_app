const {verify} = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    console.log("VALIDATE TOKEN")
    const accessToken = req.headers["accesstoken"]
    console.log(accessToken)

    try{
        console.log("YES")
        const validToken = verify(accessToken, "importantsecret")
        req.user = validToken
        if(validToken){
            return next()
        }

    }catch(error){
        console.log(error)
    }
}

module.exports = {validateToken}