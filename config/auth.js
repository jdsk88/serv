
import config from'config';
import jwt from'jsonwebtoken';

module.exports = function (req,res,next) {
    const token = req.headers['x-access-token'] || req['authorization']
    if (!token){
        return res.status(401).send('Access denied, token is not valid or does not exist')
    }
    try {
        const decoded = jwt.verify(token, config.get('privatekey'))
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Token is not valid');
    }
}
