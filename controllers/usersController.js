const { User } = require('../models/userModel')



// Foydalanuvchilar ro'yhatini olish
const getUser = async (_, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }catch(err) {
        res.status(400).json({ error: { message: 'Foydalanuvchilarni olishda xatolik ro\'y berdi' }, errorData: err })
    }
}

// Foydalanuvchini yangilash
const putUser = async (req, res) => {
    const id = req.params.id
    try {
        const result = await User.findByIdAndUpdate(id, req.body)
        res.json({message: 'Foydalanuvchi yangilandi', user: result})
    }catch(err) {
        res.json({message: 'foydalanuvchini yangilab bo\'lmadi', error: err})
    }
}


// Foydalanuvchini yo'q qilish
const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.json({message: 'Foydalanuvchi yo\'q qilindi'})
    }catch(err) {
        res.json({message: 'foydalanuvchini o\'chirib bo\'lmadi', error: err})
    }
}


module.exports = { getUser, deleteUser, putUser }