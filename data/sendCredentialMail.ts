import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_MAIL,
    pass: process.env.AUTH_PASS,
  },
});

const sendCredentialMail = async (email: string, password: string) => {
  const mailOptions = {
    from: process.env.AUTH_MAIL,
    to: email,
    subject:
      "Your Login Credentials from The Earn Way Youth Development Resource",
    text: `Congratulation,

We are pleased to inform you that your branch account has been verified.

Here are your login credentials:

Email: ${email}
Password: ${password}

Please keep this information secure. If you did not request this, please ignore this email or contact support if you have questions.

Thank you,
The Earn Way Youth Development Resource.
`,
    html: `
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333; text-align: center;">Your Login Credentials</h2>
        <p style="text-align: center;">Hello,</p>
        <p style="text-align: center;">We are pleased to inform you that your branch account has been verified.</p>
        <p style="text-align: center; font-size: 1.2em; margin: 20px 0;">Here are your login credentials:</p>
        <p style="text-align: center; font-size: 1.5em; font-weight: bold;">Email: ${email}</p>
        <p style="text-align: center; font-size: 1.5em; font-weight: bold;">Password: ${password}</p>
        <p style="text-align: center;">Please keep this information secure. If you did not request this, please ignore this email or contact support if you have questions.</p>
        <p style="text-align: center;">Thank you,</p>
        <p style="text-align: center;">The Earn Way Youth Development Resource.</p>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
        <p style="font-size: 0.9em; color: #666; text-align: center;">This email was sent to you by The Earn Way Youth Development Resource.</p>
      </div>
    </body>
    </html>
  `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false };
  }
};

export default sendCredentialMail;
