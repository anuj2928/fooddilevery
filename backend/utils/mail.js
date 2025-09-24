import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",  // ✅ must be a string
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS, // must be App Password, not normal Gmail password
  },
});

export const sendOtpMail = async (to, otp) => {
  try {
   

    await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject: "Reset Your Password",
      html: `<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`,
    });
    console.log("OTP mail sent!");
  } catch (err) {
    console.error("Error sending OTP mail:", err);
    throw err;
  }
};

export const sendDeliveryOtpMail = async (user, otp) => {
  try {
    console.log("From:", process.env.EMAIL);
    console.log("To:", user.email);

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "Delivery OTP",
      html: `<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`,
    });
    console.log("Delivery OTP mail sent!");
  } catch (err) {
    console.error("Error sending Delivery OTP mail:", err);
    throw err;
  }
};
