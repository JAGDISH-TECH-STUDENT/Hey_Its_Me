const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function sendEmail(formData: { name: string; email: string; subject: string; message: string }): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    return response.ok && data.success;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
