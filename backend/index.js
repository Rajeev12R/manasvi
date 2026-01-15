import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});

const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "https://manasvi-mu.vercel.app/", "https://manasvi-rathore.vercel.app/", "https://manasvi-rathore.vercel.app/contact"],
  methods: ["POST"]
}));


app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  try {
    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your email provider
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
      tls: { rejectUnauthorized: false },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail requires the sender to be the authenticated user
      replyTo: email,
      to: process.env.EMAIL_RECEIVER,
      subject: subject || "New Contact Form Submission",
      text: `Message from ${name} (${email}):\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    console.log("Attempting to send email...");
    console.log("From:", mailOptions.from);
    console.log("To:", mailOptions.to);

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    res.status(200).json({ message: "Email sent successfully!", messageId: info.messageId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));