const boom = (n) => {
  for (let i = 0; i < 3; i++) {
    bam(n);
  }

  for (let k = 0; k < 10000; k++) {
    console.log(k);
  }
};

const bam = (m) => {
  for (let j = 0; j < m; j++) {
    console.log(j);
  }
};

boom(10);

// const boom = (n) => {
//   for (let i = 0; i < 3; i++) {   // 3n
//     bam(n);
//   }

//   for (let k = 0; k < 10000; k++) {   // 100000
//     console.log(k);
//   }
// };

// const bam = (m) => {
//   for (let j = 0; j < m; j++) {
//     console.log(j);
//   }
// };

// 3n + 10000 -> O(n)
