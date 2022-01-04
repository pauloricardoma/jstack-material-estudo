const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
    // reject('Error');
  }, 1000);
});

// apiCall
//   .then((response) => {
//     console.log(response);
//     console.log('Depois da Promise...');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log('Depois da Promise...');

async function run() {
  try {
  const response = await apiCall;
  console.log(response);
  console.log('Depois da Promise...');
} catch (error) {
  console.log(error);
}
}
run();
