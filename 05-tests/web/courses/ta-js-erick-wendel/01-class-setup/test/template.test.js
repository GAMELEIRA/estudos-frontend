import { expect, it } from '@jest/globals';

const sum = (a, b) => {
  return a + b;
};

//it EH UM OPERADOR DO JEST UTILIZADO CRIAR CASOS DE TESTES
it('should return the sum of two numbers', () => {
  // expect EH UM OPERADOR DO JEST QUE COMPARA A SAIDA DO CODIGO COM O VALOR ESPERADO
  expect(sum(2, 3)).toBe(5);
});
