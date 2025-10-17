import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});

const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "https://manasvi-mu.vercel.app/"],
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
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // your receiving email
      subject: subject || "New Contact Form Submission",
      text: message,
      html: `<p>${message}</p><br/><p>From: ${name} (${email})</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));