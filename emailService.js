const nodemailer = require("nodemailer");

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,          // SSL
    secure: true,       // true for 465, false for 587
    auth: {
      user: "abhijain17825@gmail.com",      // your Gmail
      pass: "wtan nydv nzxz frwg",         // 16-char App Password, NO spaces
    },
  });

  await transporter.sendMail({
    from: "your-email@gmail.com",        // same as user
    to,
    subject,
    text,
  });
}

module.exports = { sendEmail };
