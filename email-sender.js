var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'llyk kkcl lnwa mtwk'
  }
});

var mailOptions = {
  from: 'myemail@gmail.com',
  to: 'youremail@gmail.com',
  subject: 'Sending Email using Node.js from MyEmail',
  text: 'Learning how to send email using node.js at GoMyCode. That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});