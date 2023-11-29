const { Schema, model } = require('mongoose')
const Joi = require('joi')


const userSchema = new Schema({
    email: Joi.string().min(3).required().email(),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
    repeat_password: Joi.ref('password'),
    name: Joi.string().min(5),
    lastName: Joi.string().min(5),
})

const user = model('User', userSchema)

module.exports = user