import { IBudgetRequestsRepository, CreateBudgetRequestData, BudgetRequestResponse } from '../repositories/budget-requests-repository.interface';
import { sendBudgetEmail } from '../service/email-service';

export class CreateBudgetRequestService {
  constructor(private budgetRequestsRepository: IBudgetRequestsRepository) {}

  async execute(data: CreateBudgetRequestData): Promise<BudgetRequestResponse> {

    const budgetRequest = await this.budgetRequestsRepository.create(data);

    sendBudgetEmail('responsavel@fullclean.com', budgetRequest)
      .catch((err) => console.error('Erro ao enviar e-mail de orçamento:', err));

    return budgetRequest;
  }
}