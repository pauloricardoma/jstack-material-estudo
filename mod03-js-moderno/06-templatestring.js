// ""; -> ''; -> ``;

// com aspas simples ou duplas, não pode existir quebra de linha
console.log('Esta é a primeira linha');
console.log('--------------------------');
// única forma de quebra com simples ou duplas '\n'
console.log('Esta é a primeira linha \n'
+ 'Esta é a segunda linha');
console.log('--------------------------');
// já com template strings, tudo é possível
console.log(`Esta é a primeira linha

Esta é a segunda linha`);
console.log('--------------------------');
const name = 'Mateus';
// interpolação de variáveis sem template strings
console.log('Seja bem vindo ' + name);
// interpolação de variáveis com template strings
console.log(`Seja bem vindo ${name}`);
console.log(`Seja bem vindo ${Math.random() > 0.5 ? 'Sim' : 'Não'}`);


