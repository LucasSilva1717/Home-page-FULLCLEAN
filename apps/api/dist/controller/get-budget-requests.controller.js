"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBudgetRequestsController = void 0;
const prisma_budget_requests_repository_1 = require("../repositories/prisma/prisma-budget-requests-repository");
const get_budget_requests_service_1 = require("../service/get-budget-requests.service");
class GetBudgetRequestsController {
    async handle(request, response) {
        try {
            const budgetRequestsRepository = new prisma_budget_requests_repository_1.PrismaBudgetRequestsRepository();
            const budgetRequestsService = new get_budget_requests_service_1.GetBudgetRequestsService(budgetRequestsRepository);
            const budgetRequests = await budgetRequestsService.execute();
            return response.status(200).json(budgetRequests);
        }
        catch (error) {
            return response.status(500).json({ message: 'Internal server error.' });
        }
    }
}
exports.GetBudgetRequestsController = GetBudgetRequestsController;
