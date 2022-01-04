// // uma class em javascript é basicamente uma função com constructor

// function minhaFunction() {
//   // Este -> dentro desta função
//   this.name = 'Mateus';
// }
// // quando atribuímos a palavra new, chamamos o método constructor, tranformando
// // essa função em um objeto, sendo um objeto podemos atribuir propriedades/valores
// // a esse objeto usando this
// // console.log(new minhaFunction());

// const minhaArrowFunction = () => {
  //   this.name = 'Mateus';
  // };
  // minhaArrowFunction();
  // // console.log(minhaArrowFunction());

  // console.log(this);

  //---------------------------------------------
// function minhaFunction() {
//   this.name = 'Mateus';

//   const minhaArrowFunction = () => {
//     this.lastname = 'Silva';
//   };

//   minhaArrowFunction();
// }

// console.log(new minhaFunction());
// console.log(this);

//---------------------------------------------
// function soma() {
//   console.log(arguments);
//   console.log(Object.values(arguments));
// }
// soma(1,2,3,4,5,6,7,'Mateus');

// function soma(primeiroParametro, ...argumentos) {
//   console.log({primeiroParametro});
//   console.log({argumentos});
// }
// soma(1,2,3,4,5,6,7,'Mateus');

// const soma = () => {
//   console.log(arguments);
// }
// soma(1,2,3,4,5,6,7,'Mateus');

// ARROW FUNCTION SEMPRE HERDA OBJETO THIS E OBJETO ARGUMENTS DE ONDE FOI CRIADA

const soma = () => {
  return 'Hello World';
}
console.log(soma());

const soma2 = () => 'Hello World';
console.log(soma2());

const algumNumero = 10
const soma3 = () => (
  algumNumero >= 10
  ? 'Maior igual que 10'
  : 'Menor que 10'
  );
  console.log(soma3());

// const getUser = () => {
//   return {
//     id: '123',
//     name: 'Mateus'
//   }
// }; embaixo refatorado
const getUser = () => ({
    id: '123',
    name: 'Mateus'
  });
  console.log(getUser());
