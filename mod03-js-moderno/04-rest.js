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

// Rest (resto) operator
const { firstName, skills, ...restUser } = user;
const [ primary, secondary, ...restSkills ] = skills;

console.log(firstName, skills, primary);
console.log(restUser, restSkills);
