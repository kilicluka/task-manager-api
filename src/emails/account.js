const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kilic.luka@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kilic.luka@gmail.com',
        subject: 'We are sad to see you go!',
        text: `Goodbye ${name} :(. What was the reason for your cancellation?`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}