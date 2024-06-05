const nodemailer = require('nodemailer');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

async function sendEmail(senderEmail, senderPassword, recipientEmail) {
  // Create a SMTP transporter object
  let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  });

  // Message object
  let message = {
    from: senderEmail,
    to: recipientEmail,
    subject: 'Allure Report',
    text: `Please find attached the Allure report. https://vagishsarraf.github.io/PlaywrightPOC/${buildID}/index.html`,
    attachments: [{
      filename: 'allure-report.zip',
      content: fs.createReadStream('allure-report.zip'), // Path to your Allure report archive
    }],
  };

  // Send email
  try {
    let info = await transporter.sendMail(message);
    console.log('Email sent successfully!', info.messageId);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}
const [_, __, buildID] = process.argv;


var senderEmail = 'vagishtestauto@gmail.com'
var senderPassword = 'swlk xipg dlov tbsh'
var recipientEmail = 'vagishtestauto@gmail.com'

// Send email
sendEmail(senderEmail, senderPassword, recipientEmail, buildID);
