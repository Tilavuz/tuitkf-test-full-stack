const express = require('express')
const connectDB = require('./config/db')
const user = require('./models/User.model')
const app = express()

app.use(express.json())

// Mongodbga ulanish
connectDB()


app.get('/signup', async (req, res) => {
    const users = await user.find({})
    res.json(users)
})


// mongodb ga post so'rovi user signub
app.post('/signup', async (req, res) => {
    
    try {
        const newUser = req.body
        const result = await user.create(newUser)
        res.send(result)
    } catch(error) {
        console.error('Ma\'lumotni saqlashda xato:', error);
        res.status(500).json({ error: 'Server xatosi' });
        res.status(201).json({ message: 'Ma\'lumot saqlandi', data: result });
    }
})




app.listen(3000, () => {
    console.log('3000 prot');
})