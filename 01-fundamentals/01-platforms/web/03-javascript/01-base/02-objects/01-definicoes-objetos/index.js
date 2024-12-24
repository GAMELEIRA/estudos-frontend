// DECLARACAO DE OBJETO DE FORMA LITERAL
const person = {
  firstName: 'Gabriel',
  middleName: 'Gameleira', 
  age: 50,
  colorEye: 'Blue'
}

const club = new Object();

club.nome = 'Corinthians';
club.since = 1910;

// FUNCOES CONSTRUTORAS
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const me = new Person('Gabriel', 25);

console.log(me);