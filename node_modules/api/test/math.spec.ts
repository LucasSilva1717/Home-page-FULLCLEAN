import { expect, test } from 'vitest';

test('deve somar dois números corretamente', () => {
  const a = 10;
  const b = 20;
  
  expect(a + b).toBe(30);
});