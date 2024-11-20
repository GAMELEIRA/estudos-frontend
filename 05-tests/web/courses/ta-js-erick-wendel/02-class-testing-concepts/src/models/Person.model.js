export default class Person {
  name;
  age;
  cpf;

  constructor(name = '', age = '', cpf = '') {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
  }

  static speakName = (name) => {
    return `Oi meu nome é ${name}`;
  };
  static validateName = (name) => {
    if (name.length === 0) {
      throw new Error('Nome vazio');
    }
  };

  static validateCpf = (cpf) => {
    if (cpf.length === 0) {
      throw new Error('CPF vazio');
    }
  };

  static validatePerson = (person) => {
    this.validateName(person.name);
    this.validateCpf(person.cpf);
  };
}
