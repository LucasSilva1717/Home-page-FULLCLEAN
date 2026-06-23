"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBudgetRequestsService = void 0;
class GetBudgetRequestsService {
    budgetRequestsRepository;
    constructor(budgetRequestsRepository) {
        this.budgetRequestsRepository = budgetRequestsRepository;
    }
    async execute() {
        const budgetRequests = await this.budgetRequestsRepository.findMany();
        return budgetRequests;
    }
}
exports.GetBudgetRequestsService = GetBudgetRequestsService;
