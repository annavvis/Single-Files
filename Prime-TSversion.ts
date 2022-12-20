const sequences = (seq1: number[], seq2: number[]): number[] => {

    const count = {};

    for (const el of seq2) {
      count[el] = (count[el] || 0) + 1;
    }
  
    const isPrimeNum = (num: number) :boolean => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };
    
    const primeOccurs = seq2.filter(el => isPrimeNum(count[el]));
    return seq1.filter(el => !primeOccurs.includes(el))
  };