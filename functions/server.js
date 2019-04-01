
require('dotenv').config();

const nodemailer = require('nodemailer');

//Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

//Step 2
let mailOptions = {
    from: 'askaroundlsu@gmail.com',
    to: 'askaroundlsu@gmail.com',
    subject: 'This email was generated by the AskAround Super AI',
    text: 'You just got hacked. get rekt.'
};

exports.sendMail = function(){
    transporter.sendMail(mailOptions, function(err, data){
        if(err)
            console.log('Error sending email: ', err);
        else 
            console.log('Email sent!! The data is ', data);
    });
}

