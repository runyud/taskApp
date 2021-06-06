const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

// const msg = {
//     to: 'runyud@gmail.com', // Change to your recipient
//     from: 'runyud@umich.edu', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   }

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'runyud@umich.edu',
        subject: 'Thanks for joining the Task App!',
        text: `Welcome to the Task App, ${name}. Feel free to use any features to create and manage your tasks`
    }
    sgMail.send(msg).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error)
    })
}

const sendGoodByeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'runyud@umich.edu',
        subject: 'We are sorry that you are leaving the Task App',
        text: `Hello ${name}. This email is to confirm the cancelation of your account. We appreciate the time you spent on using our app!`
    }
    sgMail.send(msg).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}
