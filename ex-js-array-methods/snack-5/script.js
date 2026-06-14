const nums = [2, 8, 4, 7, 12, 87];
const numPari = nums.filter((numero) => {
  return numero % 2 === 0;
});
console.log(numPari);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
