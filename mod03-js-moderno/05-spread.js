const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};

// Imutabilidade -> importante propriedade do React, de nunca mudar uma
// propriedade do objeto, cria um novo com as mesmas propriedades e o modifica

// user.active = true;
// Object.assign(user, { active: true });

// Spread (espalhar) operator
// const updatedUser = {
//   firstName: user.firstName,
//   lastName: user.lastName,
//   age: user.age,
//   instagram: user.instagram,
//   skills: user.skills,
//   active: user.active,
// }; refatorando usando spread
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true,
};

console.log({user});
console.log({updatedUser});
