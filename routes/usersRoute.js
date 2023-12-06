const { Router } = require('express')
const router = Router()
const { authMiddleware } = require('../middleware/authMiddleware')

const { getUser, postUser } = require('../controllers/usersController')


// Foydalanuvchilarning ro'yhati
router.get('/users', getUser)

// Foydalanuvchi qo'shish
router.post('/sign', postUser)



module.exports = router