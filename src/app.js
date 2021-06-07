const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()


// without express middleware: new request -> run route handler
// with middleware: new request -> do something (check if there is authenticated token) -> run route handler
//  registering middleware
// app.use((req, res, next) => {
//     if(req.method == 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// }) 

// add file upload to express
// const multer = require('multer')
// const upload = multer({
//     dest: 'imgs',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         // !file.originalname.endsWith('.pdf')
//         if (!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app
// runyu -> jskldfjsadiofjiaosj -> x runyu
// hashing algorithm can't be reversed

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345', hashedPassword)
//     console.log(isMatch)
// }

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('60bafdd98772e1c422ebdf72')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
    
//     const user = await User.findById('60bafd4edf50a0c40eea424e')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()
