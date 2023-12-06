const { User } = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const authPost = async (req, res) => {

    try {
        const auth = await User.findOne({email: req.body.email})
        if(!auth) {
            res.status(400).json({ message: 'Foydalanuvchi mavjut emas' })
            return
        }

        const authPwd = await bcrypt.compare(req.body.password, auth.password)
        if(!authPwd){
            res.status(400).json({message: 'Parolda xatolik bor'})
            return
        }

        const token = jwt.sign({_id: auth._id, name: auth.name, surname: auth.surname, email: auth.email}, '72tilavuz51')

        res.header('x-auth-token', token).json({message: 'Malumot To\'g\'ri', type: true }).status(200)

    }catch (err) {
        console.log(err);
    }
}

module.exports = { authPost }