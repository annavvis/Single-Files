const sequences = (seq1: number[], seq2: number[]): number[] => {
    interface Count {
        [key: number] : number;
    }

    const count : Count = {};

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
  console.time('time')
  sequences([2,3,9,2,5,1,3,7,10],[2,1,3,4,3,10,6,6,1,7,10,10,10])
  console.timeEnd('time')