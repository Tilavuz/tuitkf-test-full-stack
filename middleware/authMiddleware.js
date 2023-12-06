const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    const token = req.header('x-auth-token')

    if(!token) 
        return res.status(401).json({message: 'Syatdan to\'liq foydalanish uchun ro\'yhatdan o\'ting'})

    try {
        const decoded = jwt.verify(token, '72tilavuz51')
        console.log(decoded);
        req.user = decoded
        next()

    }catch (err) {
        return res.status(400).json({message: 'Yaroqsiz foydalanuvchi', error: err})
    }
}

module.exports = { authMiddleware }