const { Router } = require('express')
const router = Router()
const { authMiddleware } = require('../middleware/authMiddleware')

const { getUser, deleteUser, putUser } = require('../controllers/usersController')


// Foydalanuvchilarning ro'yhati
router.get('/users', authMiddleware, getUser)


// Foydalanuvchini o'chirish
router.delete('/users/:id', authMiddleware, deleteUser)


router.delete('/users/:id', authMiddleware, putUser)


module.exports = router