const { Router } = require('express')
const router = Router()

const { loginUser, postUser } = require('../controllers/authController')

// Foydalanuvchi tizimga kiritish
router.post('/login', loginUser)

// Foydalanuvchi qo'shish
router.post('/sign', postUser)

module.exports = router