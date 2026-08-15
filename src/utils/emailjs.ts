const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY as string | undefined;
const SENDER_EMAIL = import.meta.env.VITE_SENDER_EMAIL as string | undefined;
const RECIPIENT_EMAIL = 'js8724285@gmail.com';

export async function sendEmail(formData: { name: string; email: string; subject: string; message: string }): Promise<boolean> {
  if (!BREVO_API_KEY || !SENDER_EMAIL) {
    console.error('Brevo API key or sender email is missing. Check your environment variables.');
    return false;
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: formData.name || 'Portfolio Visitor', email: SENDER_EMAIL },
        to: [{ email: RECIPIENT_EMAIL, name: 'Jagdish' }],
        subject: formData.subject || 'New message from portfolio',
        htmlContent: `
          <h3>New message from your portfolio</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong><br/>${formData.message.replace(/\n/g, '<br/>')}</p>
        `
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Brevo API error:', response.status, errorText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
