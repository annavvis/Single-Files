const sequences = (seq1, seq2) => {

    const count = {};
//   for(let i =0; i < seq2.length ; i++) {
    
//   }
    for (const el of seq2) {
      count[el] = (count[el] || 0) + 1;
    }
  
    const isPrimeNum = (num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };
    
    const primeOccurs = seq2.filter(el => isPrimeNum(count[el]))
    console.log(primeOccurs)
    console.log(seq1.filter(el => !primeOccurs.includes(el)))
    return seq1.filter(el => !primeOccurs.includes(el))
  };
  
  sequences([2, 3, 9, 2, 5, 1, 3, 7, 10], [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]);
// let A=[2,3,9,2,5,1,3,7,10] 
// let B=[2,1,3,4,3,10,6,6,1,7,10,10,10] 

// // C=[2,9,2,5,7,10] 
// let C = [];

// let count = {};

// B.forEach ((el) => {
//     count[el] = (count[el] || 0 ) + 1
// });

// // {1: 2, 2: 1, 3: 2, 4: 1, 6: 2, 7: 1, 10: 4}


// const values = Object.values(count);
// const keys = Object.keys(count);

// const isPrime = (number) => {
//     if (number <= 1) {
//         return false;
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 return false;
//             }
//         } return true;
//     }
// }

// let BNew = B.filter(el => !isPrime(count[el]))
// // [2, 4, 10, 7, 10, 10, 10]

// let sum = A.concat(BNew);
// // [2, 3, 9, 2, 5, 1, 3, 7, 10, 2, 4, 10, 7, 10, 10, 10]

// C = sum.filter(el => !isPrime(count[el]))
// // [2, 2, 7, 10, 2, 4, 10, 7, 10, 10, 10]

// let sum2 = A.concat(B)
// D = sum2.filter(el => !isPrime(count[el]));
// // [2, 2, 7, 10, 2, 4, 10, 7, 10, 10, 10]


// const combined = (el) => {
//     if (values != isPrime) {
//         C.push(el);
//     } else {
//         return false;
//     }
// }