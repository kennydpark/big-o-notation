const zoom = (n) => {
  if (n === 0) {
    console.log('liftoff!');
    return;
  }

  console.log(n);
  zoom(n - 1);
};

zoom(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// liftoff!


// Time complexity: O(n)
// Space complexity: O(n)
// where n is input number
