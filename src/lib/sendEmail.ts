// src/lib/sendEmail.ts

export async function sendEmail({
    evento,
    nome,
    email,
    socio,
    handicap,
    telemovel,
  }: {
    evento: string;
    nome: string;
    email: string;
    socio: string;
    handicap: string;
    telemovel: string;
  }) {
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ evento, nome, email, socio, handicap, telemovel }),
      });
    } catch (err) {
      console.error('Erro ao enviar email:', err);
    }
  }