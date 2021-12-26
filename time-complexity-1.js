const foo = (n) => {
  for (let a = 0; a < n / 2; a++) {
    console.log(a);
  }
  for (let b = 0; b < n; b++) {
    for (let c = 0; c < n; c++) {
      console.log(b + "," + c);
    }
  }
};

foo(10);

// const foo = (n) => {

//   for (let a = 0; a < n / 2; a++) {   // O(n / 2) -> O(n)
//     console.log(a);
//   }

//   for (let b = 0; b < n; b++) {   // O(n)
//     for (let c = 0; c < n; c++) {   // O(n + n^2) -> O(n^2)
//       console.log(b + "," + c);
//     }
//   }
// };
