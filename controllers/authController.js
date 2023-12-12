const { User } = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Jwt token generate
const generateJwtToken = (id) => {
    console.log(id);
    const token = jwt.sign({id}, '72tilavuz51', {expiresIn: '7d'})
    return token
}


const loginUser = async (req, res) => {

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

// Foydalanuvchi qo'shish
const postUser = async (req, res) => {
    try {
        const user = new User(req.body)
        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()

        const token = generateJwtToken(user._id)
        
        console.log(token);
        res.header('x-auth-token', token).status(201).json({
            message: 'Foydalanuvchi ro\'yhatga qo\'shildi',
        })
    }catch(err) {
        res.status(400).json( { message: 'Foydalanuvchi ro\'yhatga olinmadi yoki bazada mavjut' })
    }
}


module.exports = { loginUser, postUser }