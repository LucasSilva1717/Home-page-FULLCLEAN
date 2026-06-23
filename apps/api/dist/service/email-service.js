"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBudgetEmail = sendBudgetEmail;
const resend_1 = require("resend");
const env_1 = require("../config/env");
const resend = new resend_1.Resend(env_1.env.RESEND_API_KEY);
async function sendBudgetEmail(to, budgetData) {
    await resend.emails.send({
        from: 'FullClean <orcamentos@seu-dominio.com>',
        to: to,
        subject: 'Novo Orçamento Recebido - FullClean',
        html: `<p>Olá, um novo orçamento foi solicitado!</p><pre>${JSON.stringify(budgetData, null, 2)}</pre>`
    });
}
