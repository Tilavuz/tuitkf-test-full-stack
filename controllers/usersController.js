const { User } = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Foydalanuvchilar ro'yhatini olish
const getUser = async (_, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }catch(err) {
        res.status(400).json({ error: { message: 'Foydalanuvchilarni olishda xatolik ro\'y berdi' }, errorData: err })
    }
}

// Foydalanuvchi qo'shish
const postUser = async (req, res) => {
    try {
        const user = new User(req.body)
        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        const {name, surname, email} = user

        // const token = jwt.sign({_id: auth._id, name: auth.name, surname: auth.surname, email: auth.email}, '72tilavuz51')

        // res.header('x-auth-token', token).json({message: 'Malumot To\'g\'ri', type: true }).status(200)

        res.status(201).json({
            message: 'Foydalanuvchi ro\'yhatga qo\'shildi',
            data: {name, surname, email}
        })
    }catch(err) {
        res.status(400).json( { message: 'Foydalanuvchi ro\'yhatga olinmadi yoki bazada mavjut' })
    }
}

// Foydalanuchi malumotlarini qaytarish
const getMe = async (req, res) => {
    
}


module.exports = { getUser, postUser, getMe }