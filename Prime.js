// Task:
// Write a function that receives two sequences: A and B of integers and returns one sequence C. Sequence C should contain all elements from sequence A (maintaining the order) except those, that are present in sequence B p times, where p is a prime number.

// Example:
// A=[2,3,9,2,5,1,3,7,10] 

// B=[2,1,3,4,3,10,6,6,1,7,10,10,10] 

// C=[2,9,2,5,7,10] 

// checking if the number is a prime number

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        } return true;
    }
}


// checking an array for prime numbers

let A=[2,3,9,2,5,1,3,7,10];

A.forEach((el) => {
    const checkPrimeNumber = isPrime(el);

    if (checkPrimeNumber) {
        return true;
    } else {
        return false;
    }
});



// counting how many duplicates are in an Array

let count = {};

A.forEach ((el) => {
    count[el] = (count[el] || 0 ) + 1
});





