"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBudgetRequestService = void 0;
const email_service_1 = require("../service/email-service");
class CreateBudgetRequestService {
    budgetRequestsRepository;
    constructor(budgetRequestsRepository) {
        this.budgetRequestsRepository = budgetRequestsRepository;
    }
    async execute(data) {
        const budgetRequest = await this.budgetRequestsRepository.create(data);
        (0, email_service_1.sendBudgetEmail)('responsavel@fullclean.com', budgetRequest)
            .catch((err) => console.error('Erro ao enviar e-mail de orçamento:', err));
        return budgetRequest;
    }
}
exports.CreateBudgetRequestService = CreateBudgetRequestService;
