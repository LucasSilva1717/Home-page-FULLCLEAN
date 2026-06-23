import { IBudgetRequestsRepository, CreateBudgetRequestData, BudgetRequestResponse } from '../../src/repositories/budget-requests-repository.interface';

export class InMemoryBudgetRequestsRepository implements IBudgetRequestsRepository {
  public items: BudgetRequestResponse[] = [];

  async create(data: CreateBudgetRequestData): Promise<BudgetRequestResponse> {
    const budgetRequest: BudgetRequestResponse = {
      id: Math.random().toString(36).substring(7),
      ...data,
      message: data.message ?? null,
      createdAt: new Date(),
    };

    this.items.push(budgetRequest);
    return budgetRequest;
  }

  async findMany(): Promise<BudgetRequestResponse[]> {
    return this.items;
  }
}