import { Resend } from 'resend';
import { env } from '../config/env';

const resend = new Resend(env.RESEND_API_KEY);

export async function sendBudgetEmail(to: string, budgetData: any) {
  await resend.emails.send({
    from: 'FullClean <orcamentos@seu-dominio.com>',
    to: to,
    subject: 'Novo Orçamento Recebido - FullClean',
    html: `<p>Olá, um novo orçamento foi solicitado!</p><pre>${JSON.stringify(budgetData, null, 2)}</pre>`
  });
}