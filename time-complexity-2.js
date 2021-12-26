const bar = (n) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
  for (let k = 0; k < 10000; k++) {
    console.log(k);
  }
};

bar(10);

// const bar = (n) => {

//   for (let i = 0; i < 3; i++) {   //
//     for (let j = 0; j < n; j++) {   // O(3 * n) -> O(n)
//       console.log(j);
//     }
//   }
//   for (let k = 0; k < 10000; k++) {
//     console.log(k);
//   }
// };

// bar(10);

// O(n + 10000) -> O(n)
