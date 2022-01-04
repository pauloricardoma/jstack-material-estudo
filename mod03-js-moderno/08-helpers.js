// Includes
const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript'];

const includesString = tech.includes('no');
const includesArray = array.includes('React');
console.log({ includesString, includesArray });

// StartsWith
const startsWith = tech.startsWith('Node');
console.log({ startsWith });

// EndsWith
const endsWith = tech.endsWith('js');
console.log({ endsWith });
