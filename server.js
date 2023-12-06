const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
// Mongo dbga ulanish
require('./config/db')()



// Foydalanuvchini ro'yhatga olish
const usersRoute = require('./routes/usersRoute')
app.use('/api', usersRoute)

// Foydalanuvchini tekshirish Auth
const authRoute = require('./routes/authRoute')
app.use('/api', authRoute)

app.listen(3000, () => {
    console.log('3000-port ishga tushdi');
})