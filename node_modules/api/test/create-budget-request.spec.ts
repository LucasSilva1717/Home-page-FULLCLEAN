import { expect, test, describe } from 'vitest';
import { CreateBudgetRequestService } from '../src/service/create-budget-request.service';
import { InMemoryBudgetRequestsRepository } from './repositories/in-memory-budget-requests-repository.ts';

describe('Create Budget Request Service', () => {
  test('deve ser capaz de criar um novo pedido de orçamento', async () => {
    const repository = new InMemoryBudgetRequestsRepository();
    const service = new CreateBudgetRequestService(repository);

    const budget = await service.execute({
      name: 'Lucas Silva',
      email: 'lucas@email.com',
      phone: '11999999999',
      zipCode: '12345-678',
      state: 'SP',
      neighborhood: 'Centro',
      serviceType: 'Limpeza de Sofá',
      message: null
    });

    expect(budget.id).toBeDefined();
    expect(repository.items).toHaveLength(1);
    expect(repository.items[0].name).toBe('Lucas Silva');
  });
});