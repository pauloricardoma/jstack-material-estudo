const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  full_name: 'Nome Completo',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};
// const firstName = user.firstName;
// const age = user.age;

// Destructuring
const data = user;
const { firstName, lastName, age, instagram, skills, full_name: fullName } = user;
const qualquercoisa = skills;
const [ primary, secondary, tertiary, quaternary ] = skills;

console.log(data);
console.log(firstName, lastName, age);
console.log(instagram, skills);
console.log(qualquercoisa);
console.log(primary, secondary);
console.log(fullName);
