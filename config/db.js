const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/tuitkf');
        console.log(`MongoDB ga ulanish hosil qilindi: ${conn.connection.host}`);
    } catch (err) {
        console.error(`MongoDB ga ulanishda xatolik yuz berdi: ${err}`);
        process.exit(1); 
    }
}

