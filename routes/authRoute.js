const { Router } = require('express')
const router = Router()

const { authPost } = require('../controllers/authController')


router.post('/login', authPost)

module.exports = router