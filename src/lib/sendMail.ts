import Mailgun from "mailgun.js";
import formData from "form-data";

// Send email
export function sendVerificationEmail(user: any, token: string, url: string) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
  });

  mg.messages
    .create("sandboxb8027e44c4dc49188972ecd4f6f69b52.mailgun.org", {
      from: "adminkada@gmail.com",
      to: user.email,
      subject: "Account verification",
      text: `Please verify your account ${url}/api/activate/${token}`,
      html:
        "<p>Thanks for signing up! We're thrilled to have you join us.</ p > " +
        "<p>Before you dive in, there's just one quick step to complete your account setup.</p>" +
        "<p>Just click the link below to confirm it's really you, and then you'll be all set up.</p>" +
        `<p style="font-weight: 'bold'">Click here to verify: ${url}/api/activate/${token}</p>` +
        "<p>We can't wait to see you around!</p>" +
        "<p>Best,</p>" +
        "<p>[Company name]</p>",
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error
}

export function sendPasswordResetEmail(user: any, token: string, url: string) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
  });

  mg.messages
    .create("sandboxb8027e44c4dc49188972ecd4f6f69b52.mailgun.org", {
      from: "adminkada@gmail.com",
      to: user.email,
      subject: "Account verification",
      text: `Please verify your account ${url}/api/password-reset/${token}`,
      html:
        "<p>Hi</p>" +
        "<p>We noticed you requested a password reset for you account</p>" +
        "<p>No worries, it happens to the best of us!</p>" +
        "<p>Click the link below to create a new secure password:</p>" +
        `<p style="font-weight: 'bold'">${url}/api/password-reset/${token}</p>` +
        "<p>This link wil take you to a secure page where you can choose a strong password to get back your account</p>" +
        `<p style="font-weight: 'bold'">Didn't request this reset?</p>` +
        "<p>No problem! If you didn't ask to change your password, you can just disregard this email. Your account is still safe. But if you think someone might be trying to access it, we recommend changing your password anyway.</p>" +
        "<p>Best,</p>" +
        "<p>[Company name]</p>",
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error
}
