import validator from 'validator'
// import * as notes from './notes.js'

// console.log(notes.getNotes())

const email = 'vil@entropiya.net'
const isEmail = validator.isEmail(email)
const url = validator.isURL('entropiya.net')
console.log(url)