import { describe, expect, it } from '@jest/globals';
import Person from '../src/models/Person.model';

//DEFINE UMA SUITE DE TESTE. UMA SUITE EH UMA COLECAO DE TESTES PARA TESTAR UMA FUNCIONALIDADE EM ESPECIFICO
describe('Bateria de Testes para Person', () => {
  describe('Valida caracteristicas de uma pessoa', () => {
    it('Deve validar se o nome está preenchido', () => {
      const mockPerson = {
        name: 'Gabriel',
        age: 25,
        cpf: '12345678900',
      };
      expect(() => Person.validatePerson(mockPerson)).not.toThrow();
    });

    it('Deve validar se o nome não está preenchido', () => {
      const mockPerson = {
        name: '',
        age: 25,
        cpf: '12345678900',
      };
      expect(() => Person.validatePerson(mockPerson)).toThrow(
        new Error('Nome vazio')
      );
    });

    it('Deve validar se o cpf não está preenchido', () => {
      const mockPerson = {
        name: 'Gabriel',
        age: 25,
        cpf: '',
      };
      expect(() => Person.validatePerson(mockPerson)).toThrow(
        new Error('CPF vazio')
      );
    });

    it('Deve validar se o cpf está preenchido', () => {
      const mockPerson = {
        name: 'Gabriel',
        age: 25,
        cpf: '12345678900',
      };
      expect(() => Person.validatePerson(mockPerson)).not.toThrow();
    });
  });

  describe('Valida o comportamento da funcionalidade speak()', () => {
    it('Deve validar se o retorno da funcao speak está retornando a frase correta ', () => {
      const name = 'Gabriel';
      const mockPhrase = `Oi meu nome é ${name}`;
      expect(Person.speakName(name)).toBe(mockPhrase);
    });
  });
});
