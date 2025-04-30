// pages/api/sendEmail.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nome, email, socio, telemovel, evento, handicap } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'noreply <onboarding@resend.dev>',
      to: 'limitless.golf.pt@gmail.com',
      subject: `Nova Inscrição - ${evento}`,
      html: `
        <p><strong>Evento:</strong> ${evento}</p>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nº Sócio:</strong> ${socio}</p>
        <p><strong>Handicap FPG:</strong> ${handicap}</p>
        <p><strong>Telemóvel:</strong> ${telemovel}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao enviar email' });
  }
}