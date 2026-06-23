"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBudgetRequestController = void 0;
const zod_1 = require("zod");
const prisma_budget_requests_repository_1 = require("../repositories/prisma/prisma-budget-requests-repository");
const create_budget_request_service_1 = require("../service/create-budget-request.service");
const createBudgetBodySchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome é obrigatório"),
    phone: zod_1.z.string().min(1, "O telefone é obrigatório"),
    email: zod_1.z.string().email("E-mail inválido"),
    state: zod_1.z.string().min(1, "O estado é obrigatório"),
    neighborhood: zod_1.z.string().min(1, "O bairro é obrigatório"),
    zipCode: zod_1.z.string().min(1, "O CEP é obrigatório"),
    serviceType: zod_1.z.string().min(1, "Selecione um tipo de serviço"),
    message: zod_1.z.string().optional(),
});
class CreateBudgetRequestController {
    async handle(request, response) {
        try {
            const data = createBudgetBodySchema.parse(request.body);
            const budgetRequestsRepository = new prisma_budget_requests_repository_1.PrismaBudgetRequestsRepository();
            const createBudgetRequestService = new create_budget_request_service_1.CreateBudgetRequestService(budgetRequestsRepository);
            const budgetRequest = await createBudgetRequestService.execute(data);
            return response.status(201).json(budgetRequest);
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return response.status(400).json({
                    message: 'Erro de validação nos dados enviados.',
                    errors: error.format()
                });
            }
            return response.status(500).json({ message: 'Internal server error.' });
        }
    }
}
exports.CreateBudgetRequestController = CreateBudgetRequestController;
