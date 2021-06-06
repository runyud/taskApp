const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// const me = new User({
//     name: '  Runyu  ',
//     email: 'MYEMAIL@GMAIL.COM   ',
//     password: 'Password'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })



// const task = new Task({
//     description: 'create a new document'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })