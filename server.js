import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

const PORT = 5001;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// contact us
app.post('/api/send-email', (req, res) => {
  const { fname,lname, phone, email, message } = req.body;

  // Configure the SMTP transporter (use your email provider's SMTP settings)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'devlanzzer@gmail.com',
      pass: 'igfg fnoh xkan jmno',
    },
  });

  const mailOptions = {
    from: "devlanzzer@gmail.com",
    to: 'devlanzzer@gmail.com',
    subject: 'New Contact Form Submission of Construction Site',
    text: `Name: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// inquire form
app.post('/api/send-inquiry', (req, res) => {
  const { name, email, message } = req.body;

  // Configure the SMTP transporter (use your email provider's SMTP settings)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'devlanzzer@gmail.com',
      pass: 'igfg fnoh xkan jmno',
    },
  });

  const mailOptions = {
    from: "devlanzzer@gmail.com",
    to: 'devlanzzer@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend is running ON port ${PORT}`);
});
