const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpzdajw';

export async function sendEmail(formData: { name: string; email: string; subject: string; message: string }): Promise<boolean> {
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('_subject', formData.subject || 'New message from portfolio');
    formDataToSend.append('_replyto', formData.email);
    formDataToSend.append('_captcha', 'false');

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      return true;
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Formspree error:', response.status, errorData);
    return false;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
