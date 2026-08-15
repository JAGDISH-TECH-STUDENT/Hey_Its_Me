import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.EMAIL_FROM || 'jagdishwork04@gmail.com';
    const recipientEmail = process.env.EMAIL_TO || 'js8724285@gmail.com';

    if (!brevoApiKey) {
      return res.status(500).json({ error: 'Brevo API key is not configured' });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: name || 'Portfolio Visitor', email: senderEmail },
        to: [{ email: recipientEmail, name: 'Jagdish' }],
        subject: subject || 'New message from portfolio',
        htmlContent: `
          <h3>New message from your portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        `
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Brevo API error:', response.status, errorText);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
