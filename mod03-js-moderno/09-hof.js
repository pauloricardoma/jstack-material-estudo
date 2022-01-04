const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find -> achar/pesquisar, retorna primeiro elemento com a regra
const find = array.find((product) => product.name === 'Magic Mouse');

// .findIndex -> retorna o index do elemento
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');

// console.log({find, findIndex});

//.some -> se algum produto cumpre a regrar, retorna true or false
const some = array.some((product) => product.price > 1000);
// console.log({some});

// .every -> se todos os produtos cumprem a regra, retorna true or false
const every = array.every((product) => product.price > 1000);
// console.log({every});

// .map -> retorna exatamente a mesma posição, cria novo array, com o que for passado
const map = array.map((product) => ({
    ...product,
    subtotal: product.quantity * product.price,
}));
// console.log({map});

// .filter -> retorna novo array, com os elementos que passarem pela condição
const filter = array.filter((product) => product.quantity > 1);
// console.log({filter});

// .reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0)
console.log({reduce});
